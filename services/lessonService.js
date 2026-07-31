
const courses = require("../database/courses");

function getLessonByIdwithCourseId(courseId, lessonId){
     const course = courses.find((course) => course.id === courseId);

    if (!course) {
        return null;
    }

    const lesson = course.lessons.find(
        (item) => item.id === lessonId
    );

    return lesson ?? null;
}

module.exports = {
    getLessonByIdwithCourseId
}

