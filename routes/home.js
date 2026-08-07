
const express = require("express");
const authenticateToken = require("../middleware/authMiddleware")

const router = express.Router();

const homeController = require('../controllers/homeController')
router.get("/home", authenticateToken,homeController.getHomeDetails);

module.exports = router;