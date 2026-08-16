const Enrollment = require('../models/enrollment')

async function enrollToCousre(userId, courseCode, lessonCode, loessonPosition) {
    const enroll = await Enrollment.create({
        userId,
        courseCode,
        currentLessonCode: lessonCode,
        currentLessonPosition: loessonPosition
    })

    return enroll
}

async function getAllEnrolledCousres(userId) {
    return await Enrollment.find({ userId })
}

async function updateEnrollement(id, lessonCode, currentLessonPosition, progress, completedLessonCode, lastPlayedLessonCode, lastPlayedLessonPosition) {
    const enrollement = await Enrollment.findById({ _id: id })
    if (lessonCode !== undefined) {
        enrollement.currentLessonCode = lessonCode
    }

    if (currentLessonPosition !== undefined) {
        enrollement.currentLessonPosition = currentLessonPosition
    }
    if (progress > 0 && progress > enrollement.progress) {
        enrollement.progress = progress;
    }
    if (completedLessonCode !== undefined && !enrollement.completedLessonCode.includes(completedLessonCode)) {
        enrollement.completedLessonCode.push(completedLessonCode)
    }
    if (lastPlayedLessonCode !== undefined) {
        enrollement.lastPlayedLessonCode = lastPlayedLessonCode
    }
    if (lastPlayedLessonPosition !== undefined) {
        enrollement.lastPlayedLessonPosition = lastPlayedLessonPosition
    }

    await enrollement.save()

    return enrollement
}

async function getLastCousreWatched(userId) {
       return await Enrollment.findOne({ userId: userId }).sort({ updatedAt: -1 });
}

module.exports = {
    enrollToCousre,
    getAllEnrolledCousres,
    updateEnrollement,
    getLastCousreWatched
}
