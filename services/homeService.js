const coursesService = require("../services/coursesService");

async function getHomeDetails() {

    const recommendedCourses =
        await coursesService.getRecommendedCourses();
    const propulareCourses = await coursesService.getPopularCources();
    const newCourses = await coursesService.getNewCources()
    return {
        continueLearning: {
            title : "React Native Masterclass",
            progress : 75,
            thumbnail : "/assets/images/thumbnail/course_001_thumbnail.png",
        },
        categories: [],
        recommendedCourses,
        propulareCourses,
    };
}

module.exports = {
    getHomeDetails
};