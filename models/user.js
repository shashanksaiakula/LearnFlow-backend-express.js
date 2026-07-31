const mongoose = require("mongoose");
const { type } = require("node:os");

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
      default : null,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    phoneNumber :{
      type : Number,
      default : 0
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);