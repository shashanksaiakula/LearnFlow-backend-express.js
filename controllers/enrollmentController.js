const enrollmentServices = require("../services/emrollmentService")

async function enrollToCousre(req, res) {
    const userId = req.user.userId
    const courseCode = req.params.courseCode
    const lessonCode = req.params.lessonCode

    const enroll = await enrollmentServices.enrollToCousre(userId, courseCode, lessonCode)

    if (!enroll) {
        return res.status(400).json({
            success: false,
            message: "Not able to enroll"
        })
    }
    return res.status(200).json({
        success: true,
        data: enroll
    })
}

async function getEnrollbyUserId(req, res) {
    const userId = req.user.userId

    const enroll = await enrollmentServices.getAllEnrolledCousres(userId)

    if (!enroll) {
        return res.status(400).json({
            success: false,
            message: "no Emrolled Cousres"
        })
    }
    return res.status(200).json({
        success: true,
        data: enroll
    })
}

async function updateEnrollment(req,res) {
    const {currentLessonCode,currentLessonPosition,progress, completedLessonCode} = req.body
        const enroll = await enrollmentServices.updateEnrollement(req.params.id, currentLessonCode,currentLessonPosition,progress,completedLessonCode)

    if (!enroll) {
        return res.status(400).json({
            success: false,
            message: "Not able to enroll"
        })
    }
    return res.status(200).json({
        success: true,
        data: enroll
    })
}

module.exports = {
    enrollToCousre,
    getEnrollbyUserId,
    updateEnrollment
}