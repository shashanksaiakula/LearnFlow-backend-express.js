const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "student",
    },

    dateOfBirth: {
      type: Date,
      default: null,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    phoneNumber: {
      type: Number,
      default: 0
    },
    passwordResetToken: {
      type: String,
      default: null,
    },

    passwordResetExpires: {
      type: Date,
      default: null,
    },
    emailVerificationToken: {
      type: String,
      default: null,
    },

    emailVerificationExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);