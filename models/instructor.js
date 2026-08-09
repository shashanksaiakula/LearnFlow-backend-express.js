const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        default: "",
    },

    bio: {
        type: String,
        default: "",
    },

    rating: {
        type: Number,
        default: 0,
    },

    totalStudents: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Instructor", instructorSchema);