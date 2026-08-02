const lessonService = require("../services/lessonService")

const getAllLessonByCourcesCode = async (req, res) => {
    const lessons = await lessonService.getAllLessonsByCourseCode(req.params.courseCode)

    if (lessons.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No data found"
        })
    }
    return res.status(200).json({
        success: true,
        data: lessons
    });
}

async function getLessonByLessonCode(req, res) {

    const lesson = await lessonService.getLessonByIdwithCourseCode(req.params.courseCode, req.params.lessonCode)
    
    if(!lesson){
        return res.status(404).json({
            success : false,
            message : "No lesson with this data"
        })
    }

    return res.status(200).json({
        success : true,
        data : lesson
    })
}

module.exports = {
    getAllLessonByCourcesCode,
    getLessonByLessonCode
}