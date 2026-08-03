
const Note = require("../models/note")

async function addNote(note) {
    const newNote = await Note.create(note)

    return newNote
}

async function getNotes(courseCode, lessonCode) {
    const notes = await Note.find({ courseCode: courseCode, lessonCode: lessonCode })

    return notes
}

async function updateNote(body, noteId) {

    const { note } = body
    const notes = await Note.findOne({ _id: noteId })

    if (!notes) {
        return null
    }
    notes.note = note

    await notes.save()

    return notes
}

async function deleteNote(noteId) {

    const note = await Note.deleteOne({ _id: noteId })

    return note
}




module.exports = {
    addNote,
    getNotes,
    updateNote,
    deleteNote
}