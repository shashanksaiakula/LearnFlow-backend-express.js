const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const emailService = require("./emailService");

const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

async function login(body) {

    const { email, password } = body;

    // Validation
    if (!email || !password) {
        return {
            statusCode: 400,
            success: false,
            message: "Email and Password are required"
        };
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
        return {
            statusCode: 404,
            success: false,
            message: "User not found"
        };
    }

    // Compare Password
    const isPasswordMatched = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordMatched) {
        return {
            statusCode: 400,
            success: false,
            message: "Incorrect password"
        };
    }

    // Generate JWT
    const accessToken = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        SECRET_KEY,
        {
            expiresIn: "15m"
        }
    );

    const refreshToken = jwt.sign(
        { userId: user._id },
        process.env.REFRESH_SECRET_KEY,
        { expiresIn: "7d" }
    )
    user.refreshToken = refreshToken

    await user.save()

    return {
        statusCode: 200,
        success: true,
        message: "Login successful",
        accessToken,
        refreshToken
    };
}

const getUserById = async (userId) => {
    const user = await User.findById(userId).select("-password")

    if (!user) {
        return null
    }
    return user
}

const changePassword = async (oldPassword, newPassword, userId) => {
    const user = await User.findById(userId)

    const isPasswordMatching = await bcrypt.compare(oldPassword, user.password)

    if (!isPasswordMatching) {
        return "Password not matching"
    }

    const encryptPassword = await bcrypt.hash(newPassword, 10)
    user.password = encryptPassword

    await user.save()
    return true

}

async function updateProfile(userId, body) {

    console.log(body)
    const { name, profileImage, dateOfBirth ,phoneNumber } = body;

    const user = await User.findById(userId);

    if (!user) {
        return null;
    }

    if (name) {
        user.name = name;
    }

    if (profileImage) {
        user.profileImage = profileImage;
    }

    if (dateOfBirth) {
        user.dateOfBirth = dateOfBirth;
    }

    if(phoneNumber){
        user.phoneNumber = phoneNumber;
    }

    await user.save();

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        dateOfBirth: user.dateOfBirth,
        phoneNumber : user.phoneNumber
    };
}
async function forgotPassword(email) {

    const user = await User.findOne({ email });

    if (!user) {
        return;
    }
    const resetToken = crypto
        .randomBytes(12)
        .toString("hex");

    const hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    console.log("RESET TOKEN:", resetToken);
    console.log("HASHED TOKEN:", hashedToken);

    user.passwordResetToken = hashedToken;

    user.passwordResetExpires =
        Date.now() + 15 * 60 * 1000;

    await user.save();

    await emailService.sendPasswordResetEmail(
        user.email,
        resetToken
    );
}

async function resetPassword(token, newPassword) {

    const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");


    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {
            $gt: Date.now()
        }
    });

    if (!user) {
        return null
    }
    const hashedPassword =
        await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    await user.save();
    return user
}

async function verifyEmail(token) {

    const hashingToken = crypto
        .createHash("sha256")
        .update(token.toString())
        .digest("hex");
    const user = await User.findOne({
        emailVerificationToken: hashingToken,
        emailVerificationExpires: {
            $gt: Date.now()
        }
    })

    if (!user) {
        return null
    }

    user.isEmailVerified = true
    user.emailVerificationToken = null
    user.emailVerificationExpires = null

    await user.save()
    return user
}

async function resendVerifyEmail(email) {

    const user = await User.findOne({ email })

    if (!user) {
        return null
    }
    const token = Math.floor(1000 + Math.random() * 9000);
    const hashToken = crypto
        .createHash("sha256")
        .update(token.toString())
        .digest("hex");
    const expiryTime = Date.now() + 72 * 60 * 60 * 1000;

    user.emailVerificationToken = hashToken
    user.emailVerificationExpires = expiryTime
    emailService.sendVerificationToken(email, token)
    await user.save()
    return user
}

async function refreshAccessToken(refreshToken) {

    if (!refreshToken) {
        return {
            statusCode: 401,
            success: false,
            message: "Refresh token is required"
        };
    }

    try {

        const payload = jwt.verify(
            refreshToken,
            process.env.REFRESH_SECRET_KEY
        );

        const user = await User.findById(payload.userId);

        if (!user || user.refreshToken !== refreshToken) {
            return {
                statusCode: 401,
                success: false,
                message: "Invalid refresh token"
            };
        }

        const accessToken = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            SECRET_KEY,
            {
                expiresIn: "15m"
            }
        );
        // const refreshToken = jwt.sign(
        //     { userId: user._id },
        //     process.env.REFRESH_SECRET_KEY,
        //     { expiresIn: "7d" }
        // )
        // user.refreshToken = refreshToken

        // await user.save()

        return {
            statusCode: 200,
            success: true,
            message: "Access token refreshed",
            accessToken
        };

    } catch (error) {

        return {
            statusCode: 401,
            success: false,
            message: "Invalid or expired refresh token"
        };
    }
}


module.exports = {
    login,
    getUserById,
    changePassword,
    updateProfile,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendVerifyEmail,
    refreshAccessToken
};