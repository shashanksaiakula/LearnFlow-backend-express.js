require("dotenv").config();
const mongoose = require("mongoose");
const Lesson = require("../models/lesson");
const lessons = require("../database/lesson");

async function seedLessons() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    await Lesson.deleteMany();
    console.log("🗑️ Old lessons deleted");

    // Check array length
    console.log(`📦 Local file contains ${lessons.length} items.`);

    // insertMany with ordered: false to skip broken records instead of crashing
    const result = await Lesson.insertMany(lessons, { ordered: false });
    console.log(`🎉 Successfully inserted ${result.length} lessons`);
    
    process.exit(0);
  } catch (error) {
    // If ordered: false, error.writeErrors will show you exactly which items failed
    if (error.writeErrors) {
      console.error(`⚠️ Schema validation failed for ${error.writeErrors.length} items.`);
      console.log(`✅ Successfully inserted ${error.insertedDocs.length} valid items.`);
    } else {
      console.error("❌ Fatal Error:", error);
    }
    process.exit(1);
  }
}

seedLessons();
