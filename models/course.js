const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    bannerImage: {
      type: String,
      default: "",
    },

    instructor: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    language: {
      type: String,
      default: "English",
    },

    duration: {
      type: String,
      default: "0h",
    },

    totalLessons: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isPopular: {
      type: Boolean,
      default: false,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);