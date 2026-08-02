const express = require("express");
const router = express.Router();

const lessonController = require("../controllers/lessonController")

router.get("/course/:courseCode/lesson/:lessonCode",lessonController.getLessonByLessonCode);

router.get("/course/:courseCode/lessons", lessonController.getAllLessonByCourcesCode)


module.exports = router;