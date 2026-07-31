const coursesService = require("../services/coursesService");

function getCourses(req, res) {
    const courses = coursesService.getAllCourses();

    res.json(courses);
}

function getCourseById(req, res){
     const course = coursesService.getCourseById(req.params.id);
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


module.exports = {
    getCourses,
    getCourseById,
    getCourseByDuration
};