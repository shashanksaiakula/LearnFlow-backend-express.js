const Course = require("../models/course");
const Review = require("../models/review")
const Instructor = require("../models/instructor")
const Lessons = require("../models/lesson")

async function getAllCourses() {
    return await Course.find();
}

async function getCourseById(id) {
    return await Course.findById(id);
}
async function getCourseByCourseCode(code) {
    return await Course.findOne({ courseCode: code })
}

async function getRecommendedCourses() {
    return await Course.find({
        isFeatured: true
    });
}

async function getPopularCources() {
    return await Course.find({
        isPopular: true
    })
}

async function getNewCources() {
    return await Course.find().sort({ createdAt: -1 }).limit(5);
}

async function getInstructorInfo(inStructorName){
    console.log("instructor",inStructorName)
    return await Instructor.findOne({name : inStructorName})
}

async function getRewiewsCoursesCode(courseCode){
    return await Review.find({courseCode : courseCode})
}

async function getLessonsByCourse(courseCode){
    return await Lessons.find({courseCode : courseCode})
}
module.exports = {
    getAllCourses,
    getCourseById,
    getRecommendedCourses,
    getCourseByCourseCode,
    getPopularCources,
    getNewCources,
    getInstructorInfo,
    getRewiewsCoursesCode,
    getLessonsByCourse
};