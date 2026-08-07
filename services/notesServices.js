const Note = require("../models/note")

async function addNote(note) {
    const newNote = await Note.create(note)

    return newNote
}

async function getNotes(courseCode, lessonCode, userId) {
    const notes = await Note.find({ courseCode: courseCode, lessonCode: lessonCode, userId : userId })

    return notes
}

async function updateNote(body, noteId, userId) {

    const { note } = body
    const notes = await Note.findOne({ _id: noteId, userId })

    if (!notes) {
        return null
    }
    notes.note = note

    await notes.save()

    return notes
}

async function deleteNote(noteId, userId) {

    const note = await Note.deleteOne({ _id: noteId , userId})

    return note
}


module.exports = {
    addNote,
    getNotes,
    updateNote,
    deleteNote
}