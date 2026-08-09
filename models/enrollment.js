const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    courseCode: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    enrolledAt: {
      type: Date,
      default: Date.now,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

enrollmentSchema.index(
  { userId: 1, courseCode: 1 },
  { unique: true }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);