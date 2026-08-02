require("dotenv").config();

const mongoose = require("mongoose");

const Lesson = require("../models/lesson");

const lessons = require("../database/lesson.json");

async function seedLessons() {
    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Connected");

        await Lesson.deleteMany();

        console.log("Old lessons deleted");

        await Lesson.insertMany(lessons);

        console.log("Lessons inserted successfully");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit(1);

    }
}

seedLessons();