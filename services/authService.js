const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

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
    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );

    return {
        statusCode: 200,
        success: true,
        message: "Login successful",
        token
    };
}

const getUserById= async(userId) => {
    const user = await User.findById(userId).select("-password")

    if(!user){
        return null
    }
    return user
}

const changePassword = async(oldPassword ,newPassword ,userId)=>{
    const user = await User.findById(userId)

    const isPasswordMatching = await bcrypt.compare(oldPassword, user.password)

    if(!isPasswordMatching){
        return "Password not matching"
    }

    const encryptPassword = await bcrypt.hash(newPassword, 10)
    user.password = encryptPassword

    await user.save()
    return true

}

async function updateProfile(userId, body) {

    console.log(body)
    const { name, profileImage, dateOfBirth } = body;

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

    await user.save();

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        dateOfBirth: user.dateOfBirth
    };
}


module.exports = {
    login,
    getUserById,
    changePassword,
    updateProfile
};