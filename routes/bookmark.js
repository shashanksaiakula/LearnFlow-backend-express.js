const express = require("express")
const router = express.Router()

const bookmarkController = require("../controllers/booknarkController")
const authenticateToken = require("../middleware/authMiddleware")

router.post("/bookmark/:cousreCode", authenticateToken, bookmarkController.addBookmark)
router.get("/bookmark", authenticateToken, bookmarkController.getBookmark)
router.delete("/bookmark/:id", authenticateToken, bookmarkController.deleteBookMark)

module.exports = router