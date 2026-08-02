const Course = require("../models/course");

async function getAllCourses() {
    return await Course.find();
}

async function getCourseById(id) {
    return await Course.findById(id);
}
async function getCourseByCourseCode(code){
    return await Course.findOne({courseCode : code})
}

async function getRecommendedCourses() {
    return await Course.find({
        isFeatured: true
    });
}

module.exports = {
    getAllCourses,
    getCourseById,
    getRecommendedCourses,
    getCourseByCourseCode
};