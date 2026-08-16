const homeService = require("../services/homeService");

async function getHomeDetails(req, res) {
    const userId = req.user.userId
    const homeData = await homeService.getHomeDetails(userId);

    return res.json(homeData)
}

module.exports = {
    getHomeDetails
};