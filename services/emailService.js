const nodemailer = require("nodemailer");

const dns = require('dns');

// Create transporter with explicit SMTP configuration (more reliable than service: "Gmail")
// Accept an optional host override (IPv4 address) so we can connect directly to an IPv4
const createTransporter = () => {
    const findEnv = (candidates) => {
        for (const k of candidates) {
            const v = process.env[k];
            if (typeof v === 'string' && v.trim().length > 0) return { key: k, value: v.trim() };
        }
        return null;
    };

    const userCandidates = ['EMAIL_USER', 'EMAIL_USERNAME', 'SMTP_USER', 'MAIL_USER', 'EMAIL_ADDRESS'];
    const passCandidates = ['EMAIL_PASSWORD', 'SMTP_PASSWORD', 'MAIL_PASSWORD', 'EMAIL_PASS'];

    const userEntry = findEnv(userCandidates);
    const passEntry = findEnv(passCandidates);

    if (!userEntry || !passEntry) {
        console.error("❌ EMAIL user/password not configured.");
        return null;
    }

    // Dynamic configuration directly from Railway dashboard
    const host = process.env.SMTP_HOST || "mail.gov.in";
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const secure = process.env.SMTP_SECURE !== 'undefined' ? (process.env.SMTP_SECURE === 'true') : true;

    console.log(`🔌 Connecting to SMTP Host: ${host} on Port: ${port} (Secure: ${secure})`);

    return nodemailer.createTransport({
        host,
        port,
        secure, 
        auth: {
            user: userEntry.value,
            pass: passEntry.value,
        },
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
    });
};

let transporter = null;

const initializeTransporter = async () => {
    transporter = createTransporter();

    if (transporter) {
        try {
            await transporter.verify();
            console.log("✅ Email transporter verified and ready");
        } catch (error) {
            console.error("❌ Email transporter verification failed. Check your credentials or network rules:");
            console.error(error.message);
            // We keep the transporter instance so the error doesn't default to "not initialized"
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