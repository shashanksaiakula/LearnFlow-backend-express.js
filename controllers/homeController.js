const homeService = require("../services/homeService");

async function getHomeDetails(req, res) {
    const homeData = await homeService.getHomeDetails();

    return res.json(homeData)
}

module.exports = {
    getHomeDetails
};