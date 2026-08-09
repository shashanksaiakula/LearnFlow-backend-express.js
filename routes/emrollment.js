const express = require("express")
const router = express.Router()

const enrollmentController = require('../controllers/enrollmentController')
const authenticateToken = require("../middleware/authMiddleware")

router.post("/enrollment/:courseCode", authenticateToken, enrollmentController.enrollToCousre)
router.get('/enrollment', authenticateToken, enrollmentController.getEnrollbyUserId)


module.exports = router;