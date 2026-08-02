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


module.exports = {
    getCourses,
    getCourseById,
    getCourseByCourseCode,
    getCourseByDuration
};