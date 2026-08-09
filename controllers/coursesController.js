const coursesService = require("../services/coursesService");

async function getCourses(req, res) {
    const courses = await coursesService.getAllCourses();

    if(!courses){
        return res.status(404).json({
            success : false,
            message : "Course not found"
        })
    }

    res.json(courses);
}

async function getCourseById(req, res){

     const course = await coursesService.getCourseById(req.params.id);
    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
}

async function getCourseByCourseCode(req, res){

     const course = await coursesService.getCourseByCourseCode(req.params.courseCode);
    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
}

function getCourseByDuration(req,res){
     const courses = coursesService.getCoursesWithLessDuration(req.params.duration);
        if(!courses)
            return res.status(404).json({error : 'not valid input'})
    
        res.json(courses)
}

async function getInstructorInfo(req, res){
    const instructor = await coursesService.getInstructorInfo(req.params.name)
    if(!instructor){
        return res.status(404).json({
            success : false,
            error: "Instructor not found" });
    }

    return res.status(200).json({
        success : true,
        data : instructor
    })
}

async function getReviewsByCourse(req, res){
    const reviews = await coursesService.getRewiewsCoursesCode(req.params.courseCode)
    if(!reviews){
        return res.status(404).json({
            success : false,
            error: "reviews not found" });
    }

    return res.status(200).json({
        success : true,
        data : reviews
    })
}

async function getLessonsByCourse(req, res){
    const Lessons = await coursesService.getLessonsByCourse(req.params.courseCode)
    if(!Lessons){
        return res.status(404).json({
            success : false,
            error: "Lessons not found" });
    }

    return res.status(200).json({
        success : true,
        data : Lessons
    })
}


module.exports = {
    getCourses,
    getCourseById,
    getCourseByCourseCode,
    getCourseByDuration,
    getInstructorInfo,
    getReviewsByCourse,
    getLessonsByCourse
};