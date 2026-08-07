const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware")

const noteController = require("../controllers/noteController")

router.get("/course/:courseCode/lesson/:lessonCode/notes", authenticateToken, noteController.getNotes)
router.post("/notes", authenticateToken, noteController.addNote)
router.put("/notes/:noteId", authenticateToken, noteController.updateNote)
router.delete("/notes/:noteId", authenticateToken, noteController.deleteNote)

module.exports = router