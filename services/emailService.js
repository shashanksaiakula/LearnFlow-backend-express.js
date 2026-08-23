const nodemailer = require("nodemailer");

const dns = require('dns');

// Create transporter with explicit SMTP configuration (more reliable than service: "Gmail")
// Accept an optional host override (IPv4 address) so we can connect directly to an IPv4
const createTransporter = (overrideHost) => {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
        console.error("❌ EMAIL_USER or EMAIL_PASSWORD not configured in environment variables");
        return null;
    }

    // Allow overriding port/secure via env for testing (Railway may block 465)
    const port = process.env.EMAIL_SMTP_PORT ? Number(process.env.EMAIL_SMTP_PORT) : 465;
    const secure = typeof process.env.EMAIL_SMTP_SECURE !== 'undefined' ? (process.env.EMAIL_SMTP_SECURE === 'true') : true;

    // Force IPv4 DNS lookup to avoid ENETUNREACH IPv6 errors on some hosts (Railway) by using lookup
    const lookup = (hostname, options, callback) => dns.lookup(hostname, { family: 4 }, callback);

    const host = overrideHost || "smtp.gmail.com";

    const transportOptions = {
        host,
        port,
        secure, // true for 465, false for other ports
        auth: {
            user: emailUser,
            pass: emailPassword,
        },
        // Add connection timeout and debug options for production
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
        // Force IPv4 to avoid ENETUNREACH on IPv6-only attempts
        lookup,
    };

    // If connecting to an IPv4 literal, set TLS servername so SNI and cert checks still use smtp.gmail.com
    if (overrideHost) {
        transportOptions.tls = Object.assign({}, transportOptions.tls, { servername: 'smtp.gmail.com' });
    }

    return nodemailer.createTransport(transportOptions);
};

let transporter = null;

const initializeTransporter = async () => {
    // Try to resolve an IPv4 address for smtp.gmail.com and prefer that to avoid IPv6 reachability issues
    let overrideHost = null;
    try {
        const addrs = await dns.promises.resolve4('smtp.gmail.com');
        if (Array.isArray(addrs) && addrs.length > 0) {
            overrideHost = addrs[0];
            console.log('🔎 Resolved smtp.gmail.com IPv4 to', overrideHost);
        }
    } catch (err) {
        // ignore resolve4 errors and fall back to hostname - we'll log below
        console.warn('⚠️ dns.resolve4 failed, falling back to smtp.gmail.com', err && err.message ? err.message : err);
    }

    transporter = createTransporter(overrideHost);

    if (transporter) {
        try {
            await transporter.verify();
            console.log("✅ Email transporter verified and ready");
        } catch (error) {
            console.error("❌ Email transporter verification failed:");
            console.error(error && error.stack ? error.stack : error);
            transporter = null;
        }
    }
};

// Initialize on module load
initializeTransporter();

// Exposed helper to explicitly verify transporter (useful for remote diagnostics)
const verifyTransporter = async () => {
    if (!transporter) {
        // attempt to initialize again (with IPv4 resolve)
        await initializeTransporter();
    }
    if (!transporter) {
        throw new Error("Email transporter not configured (missing EMAIL_USER or EMAIL_PASSWORD) or verification failed");
    }
    await transporter.verify();
    return true;
};

const sendEmail = async (to, subject, text) => {
    if (!transporter) {
        const error = new Error("Email transporter not initialized - check EMAIL_USER and EMAIL_PASSWORD environment variables");
        console.error("❌", error.message);
        throw error;
    }

    try {
        const info = await transporter.sendMail({
            from: `"LearnFlow" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });

        console.log(`✅ Email sent successfully to ${to}: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error(`❌ Failed to send email to ${to}:`);
        console.error(error && error.stack ? error.stack : error);
        throw error;
    }
};

// Send without awaiting - useful so HTTP handlers don't block on SMTP issues
const sendEmailFireAndForget = (to, subject, text) => {
    if (!transporter) {
        console.error("❌ Email transporter not initialized - cannot send fire-and-forget email");
        return;
    }

    transporter.sendMail({
        from: `"LearnFlow" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
    }).then(info => {
        console.log(`✅ (background) Email sent to ${to}: ${info.messageId}`);
    }).catch(error => {
        console.error(`❌ (background) Failed to send email to ${to}:`);
        console.error(error && error.stack ? error.stack : error);
    });
};

// Test helper that fully awaits send (useful when you want the error in logs)
const sendTestEmail = async (to = process.env.EMAIL_USER) => {
    const subject = "LearnFlow - SMTP test";
    const text = "This is a test email from LearnFlow (SMTP diagnostics).";
    return sendEmail(to, subject, text);
};

const sendPasswordResetEmail = async (email, resetToken, fireAndForget = false) => {
    const subject = "LearnFlow - Reset Password";
    const text = `\nYour password reset token is:\n\n${resetToken}\n\nThis token will expire in 15 minutes.\n`;

    if (fireAndForget) {
        sendEmailFireAndForget(email, subject, text);
        return { success: true, background: true };
    }

    return sendEmail(email, subject, text);
};

const sendVerificationToken = async (email, token, fireAndForget = false) => {
    const subject = "LearnFlow - Verification Token";
    const text = `\nYour Verification token is:\n\n${token}\n\nThis token will expire in 72 hours.\n`;

    if (fireAndForget) {
        sendEmailFireAndForget(email, subject, text);
        return { success: true, background: true };
    }

    return sendEmail(email, subject, text);
};

module.exports = {
    sendPasswordResetEmail,
    sendVerificationToken,
    sendEmailFireAndForget,
    sendTestEmail,
    verifyTransporter,
    sendEmail,
};