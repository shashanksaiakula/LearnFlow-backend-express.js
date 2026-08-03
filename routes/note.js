const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController")

router.get("/course/:courseCode/lesson/:lessonCode/notes", noteController.getNotes)
router.post("/notes", noteController.addNote)
router.put("/notes/:noteId", noteController.updateNote)
router.delete("/notes/:noteId", noteController.deleteNote)

module.exports = router