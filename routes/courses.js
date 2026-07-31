const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/coursesController");

router.get("/courses", coursesController.getCourses);

router.get("/course/:id", coursesController.getCourseById);

router.get("/courses/duration/:duration",coursesController.getCourseByDuration)


module.exports = router;