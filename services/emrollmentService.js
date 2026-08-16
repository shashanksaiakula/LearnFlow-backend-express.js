const Emrollment = require('../models/enrollment')

async function enrollToCousre(userId, courseCode, lessonCode, loessonPosition) {
    const enroll = await Emrollment.create({
        userId,
        courseCode,
        currentLessonCode: lessonCode,
        currentLessonPosition: loessonPosition
    })

    return enroll
}

async function getAllEnrolledCousres(userId) {
    return await Emrollment.find({ userId })
}

async function updateEnrollement(id, lessonCode, currentLessonPosition, progress, completedLessonCode) {
    const emrollement = await Emrollment.findById({ _id: id })
    if (lessonCode !== undefined) {
        emrollement.currentLessonCode = lessonCode
    }

    if (currentLessonPosition !== undefined) {
        emrollement.currentLessonPosition = currentLessonPosition
    }
    if (progress > 0 && progress > emrollement.progress) {
        emrollement.progress = progress;
    }
    if (completedLessonCode !== undefined && !emrollement.completedLessonCode.includes(completedLessonCode)) {
        emrollement.completedLessonCode.push(completedLessonCode)
    }
    
    await emrollement.save()

    return emrollement
}


module.exports = {
    enrollToCousre,
    getAllEnrolledCousres,
    updateEnrollement
}
