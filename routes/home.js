
const express = require("express");

const router = express.Router();

const homeSevice = require('../services/homeService')
router.get("/home", (req, res) => {
    res.json(homeSevice.getHomeDetails())
});

module.exports = router;