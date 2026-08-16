const coursesService = require("../services/coursesService");
const enrollemtServices = require("../services/emrollmentService")
const bookmarkedServices = require("../services/bookmarkService")

async function getHomeDetails(userId) {

    const recommendedCourses =
        await coursesService.getRecommendedCourses();
    const enrolledCousrces = await enrollemtServices.getAllEnrolledCousres(userId)
    const continueLearning = await enrollemtServices.getLastCousreWatched(userId)
    const bookmarked = await bookmarkedServices.getBookmarks(userId)
    // const continueLearning = 

    return {
        continueLearning,
        enrolledCousrces,
        recommendedCourses,
        bookmarked
    };
}

module.exports = {
    getHomeDetails
};