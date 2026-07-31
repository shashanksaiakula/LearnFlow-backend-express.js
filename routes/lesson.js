const express = require("express");
const router = express.Router();

const lessonService = require("../services/lessonService")

router.get("/course/:courseId/lesson/:lessonId", (req,res) =>{
     const courseId = parseInt(req.params.courseId);
    const lessonId = parseInt(req.params.lessonId);

   const lesson =  lessonService.getLessonByIdwithCourseId(courseId, lessonId)
   if(!lesson) return res.status(404).json({error : "Lesson not found"})
    return res.json(lesson)
});
module.exports = router;