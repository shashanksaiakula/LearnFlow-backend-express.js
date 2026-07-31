const express = require("express")
const authController = require("../controllers/authController")
const authenticateToken = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/login", authController.login)
router.get("/profile",authenticateToken,authController.getProfile)
router.post("/register",authController.register)
router.post("/changePassword",authenticateToken,authController.changePassword)
router.post("/logout",authenticateToken,authController.logout)
router.put(
    "/editProfile",
    authenticateToken,
    authController.updateProfile
);

module.exports = router