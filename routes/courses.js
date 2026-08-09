const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/coursesController");

router.get("/courses", coursesController.getCourses);

router.get("/course/:id", coursesController.getCourseById);
router.get("/course/code/:courseCode", coursesController.getCourseByCourseCode);

router.get("/courses/duration/:duration",coursesController.getCourseByDuration)
router.get("/course/reviews/:courseCode", coursesController.getReviewsByCourse)
router.get("/course/instructor/:name", coursesController.getInstructorInfo)
router.get("/course/lessons/:courseCode", coursesController.getLessonsByCourse)


module.exports = router;