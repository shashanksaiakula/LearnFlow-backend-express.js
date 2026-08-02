
const courses = require("../database/courses");
const Lessons = require("../models/lesson")

async function getLessonByIdwithCourseCode(courseCode, lessonCode) {
    return await Lessons.findOne({
        courseCode,
        lessonCode
    })
}

async function getAllLessonsByCourseCode(courceCode) {
    return await Lessons.find({ courseCode: courceCode })
}

module.exports = {
    getLessonByIdwithCourseCode,
    getAllLessonsByCourseCode
}

