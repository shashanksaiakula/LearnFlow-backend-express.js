const Emrollment = require('../models/enrollment')

async function enrollToCousre(userId, courseCode){
    const enroll = await Emrollment.create({
        userId,
        courseCode
    })

    return enroll
}

async function getAllEnrolledCousres(userId){
    return await Emrollment.find({userId})
}

module.exports= {
    enrollToCousre,
    getAllEnrolledCousres
}
