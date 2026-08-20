const { json } = require("node:stream/consumers");
const User = require("../models/user");
const authService = require("../services/authService");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const emailServices = require("../services/emailService")

async function login(req, res) {
    try {

        const result = await authService.login(req.body);
        return res.status(result.statusCode).json(result);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

async function register(req, res) {

    try {

        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check Existing Email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = Math.floor(1000 + Math.random() * 9000);
        const hashToken = crypto
            .createHash("sha256")
            .update(token.toString())
            .digest("hex");
        const expirTime = Date.now() + 72 * 60 * 60 * 1000;
        // Create User


        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            isActive: true,
            isEmailVerified: false,
            emailVerificationToken: hashToken,
            emailVerificationExpires: expirTime
        });

        emailServices.sendVerificationToken(email, token)

        // Response
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            // data: {
            //     id: newUser._id,
            //     fullName: newUser.fullName,
            //     email: newUser.email
            // }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

async function getProfile(req, res) {

    const userId = req.user.userId;

    const user = await authService.getUserById(userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    res.status(200).json({
        statusCode: 200,
        success: true,
        data: user
    })
}

const changePassword = async (req, res) => {

    const userId = req.user.userId;
    const { newPassword, oldPassword } = req.body
    const response = await authService.changePassword(oldPassword, newPassword, userId)

    if (response === "Password not matching") {
        return res.status(403).json({
            success: false,
            message: "entered inscorrect Password"
        })
    }

    if (response) {
        res.status(200).json({
            success: true,
            message: "Password changed Sucessfully"
        })
    }
}

const logout = (req, res) => {

    return res.status(200).json({
        success: true,
        message: "Logout Sucessfully"
    })
}

async function updateProfile(req, res) {

    try {

        const userId = req.user.userId;

        const result = await authService.updateProfile(
            userId,
            req.body
        );

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}
async function forgotPassword(req, res) {
    try {

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        await authService.forgotPassword(email);

        return res.status(200).json({
            success: true,
            message: "If the email exists, a password reset email has been sent"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

async function resetPassword(req, res) {
    try {
        const { token, newPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Token and new password are required"
            });
        }

        const result = await authService.resetPassword(
            token,
            newPassword
        );

        if (!result) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired reset token"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Password reset successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function verifyEmail(req, res) {

    const { token } = req.body
    console.log("response is ", token)
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Token is required"
        });
    }
    const user = await authService.verifyEmail(token)

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Invalid or expired email verfication token"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Email verified successfully"
    });

}

async function resendVerifyEmail(req, res) {

    const { email } = req.body

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "email is required"
        });
    }
    const user = await authService.resendVerifyEmail(email)

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Invalid email ID"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Email sent successfully"
    });

}

async function refreshToken(req, res) {

    const { refreshToken } = req.body;

    const result =
        await authService.refreshAccessToken(refreshToken);

    return res.status(result.statusCode).json(result);
}


module.exports = {
    getProfile,
    login,
    register,
    changePassword,
    updateProfile,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendVerifyEmail,
    refreshToken
};