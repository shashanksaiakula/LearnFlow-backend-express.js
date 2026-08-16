
const courses = require("../database/courses");
const Lessons = require("../models/lesson")

async function getLessonByIdwithCourseCode(courseCode, lessonCode) {
    return await Lessons.findOne({
        courseCode,
        lessonCode
    })
}

async function getAllLessonsByCourseCode(courceCode) {
    const lessons = await Lessons.find({ courseCode: courceCode });

    // This physically rearranges the array before returning it
    return lessons.sort((a, b) => a.lessonNumber - b.lessonNumber);
}


module.exports = {
    getLessonByIdwithCourseCode,
    getAllLessonsByCourseCode
}

