const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        courseCode: {
            type: String,
            required: true,
        },
        lessonCode: {
            type: String,
            required: true,
        },
        selectedText: {
            type: String,
            defaut: "",
        },
        timestamp: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", noteSchema);