const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },

    lessonCode: {
      type: String,
      required: true,
      unique: true,
    },

    lessonNumber: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    thumbnail: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      required: true,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },

    transcriptAvailable: {
      type: Boolean,
      default: true,
    },

    notesAvailable: {
      type: Boolean,
      default: true,
    }, 
    isCompleted : {
      type : Boolean,
      default : false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lesson", lessonSchema);