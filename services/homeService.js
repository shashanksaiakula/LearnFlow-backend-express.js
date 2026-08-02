const coursesService = require("../services/coursesService");

async function getHomeDetails() {

    const recommendedCourses =
        await coursesService.getRecommendedCourses();
    return {
        continueLearning: {},
        categories: [],
        recommendedCourses
    };
}

module.exports = {
    getHomeDetails
};