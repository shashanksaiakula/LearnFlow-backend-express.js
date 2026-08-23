const express = require("express")
const authController = require("../controllers/authController")
const authenticateToken = require("../middleware/authMiddleware")
const emailService = require("../services/emailService")

const router = express.Router()

router.post("/login", authController.login)
router.get("/profile", authenticateToken, authController.getProfile)
router.post("/register", authController.register)
router.post("/changePassword", authenticateToken, authController.changePassword)
router.post("/logout", authenticateToken, authController.logout)
router.put("/editProfile", authenticateToken, authController.updateProfile);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword", authController.resetPassword);
router.post("/verifyEmail", authController.verifyEmail);
router.post("/resendVerifyEmailToken", authController.resendVerifyEmail);
router.post("/refreshToken", authController.refreshToken);

// Temporary protected endpoint for SMTP diagnostics. Requires secret via ?secret=ENV_EMAIL_TEST_SECRET or matching env EMAIL_TEST_SECRET
router.get('/__email-test', async (req, res) => {
    const secret = req.query.secret || req.headers['x-email-test-secret'];
    const expected = process.env.EMAIL_TEST_SECRET;
    if (!expected || secret !== expected) {
        return res.status(403).json({ ok: false, message: 'forbidden' });
    }

    try {
        await emailService.verifyTransporter();
        const result = await emailService.sendTestEmail(process.env.EMAIL_USER);
        return res.json({ ok: true, result });
    } catch (err) {
        console.error('Email test failed:', err && err.stack ? err.stack : err);
        return res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
    }
});

// Protected debug endpoint that returns safe diagnostics about environment variables (does NOT expose values)
router.get('/__email-debug', (req, res) => {
    const secret = req.query.secret || req.headers['x-email-test-secret'];
    const expected = process.env.EMAIL_TEST_SECRET;
    if (!expected || secret !== expected) {
        return res.status(403).json({ ok: false, message: 'forbidden' });
    }

    const rawUser = process.env.EMAIL_USER;
    const rawPass = process.env.EMAIL_PASSWORD;
    const user = typeof rawUser === 'string' ? rawUser.trim() : rawUser;
    const pass = typeof rawPass === 'string' ? rawPass.trim() : rawPass;

    const info = {
        EMAIL_USER_present: !!user,
        EMAIL_USER_length: user ? user.length : 0,
        EMAIL_PASSWORD_present: !!pass,
        EMAIL_PASSWORD_length: pass ? pass.length : 0,
        EMAIL_SMTP_PORT: process.env.EMAIL_SMTP_PORT || null,
        EMAIL_SMTP_SECURE: typeof process.env.EMAIL_SMTP_SECURE !== 'undefined' ? process.env.EMAIL_SMTP_SECURE : null
    };

    return res.json({ ok: true, info });
});

module.exports = router