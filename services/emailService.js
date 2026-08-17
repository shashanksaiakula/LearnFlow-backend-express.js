const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendPasswordResetEmail = async (email, resetToken) => {

    await transporter.sendMail({
        from: `"LearnFlow" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "LearnFlow - Reset Password",

        text: `
Your password reset token is:

${resetToken}

This token will expire in 15 minutes.
        `,
    });
};

const sendVerificationToken = async (email, token) => {

    await transporter.sendMail({
        from: `"LearnFlow" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "LearnFlow - Verification Token",

        text: `
Your Verification token is:

${token}

This token will expire in 72 hours.
        `,
    });
};


module.exports = {
    sendPasswordResetEmail,
    sendVerificationToken
};