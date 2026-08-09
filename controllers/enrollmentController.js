const enrollmentServices = require("../services/emrollmentService")

async function enrollToCousre(req, res) {
    const userId = req.user.userId
    const courseCode = req.params.courseCode

    const enroll = await enrollmentServices.enrollToCousre(userId, courseCode)

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

module.exports = {
    enrollToCousre,
    getEnrollbyUserId
}