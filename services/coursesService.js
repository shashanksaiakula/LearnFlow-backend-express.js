
const courses = require("../database/courses");

function getAllCourses() {
    return courses;
}

function getCourseById(getId) {
    const id = parseInt(getId)
    const course = courses.find((course) => course.id === id);
    if (!course) {
     return null;
   }
    return course;
}

function getCoursesWithLessDuration(getDuration) {
    const duration = parseInt(getDuration)
    const coursesWithLessDuration = courses.filter((course) =>{
        const hours = parseInt(course.duration,10)
        return hours <= duration
    }
)    
    return coursesWithLessDuration;
}

function getRecommendedCourses(){
    return courses
}


module.exports = {
    getAllCourses,
    getCourseById,
    getCoursesWithLessDuration,
    getRecommendedCourses
};