
const noteService = require("../services/notesServices")

const addNote = async (req, res) => {

    const note = await noteService.addNote(req.body)

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "data not added Proeprly"
        })
    }

    return res.status(200).json({
        success: true,
        message: "Noted added successfully"
    })

}

const getNotes = async (req, res) => {

    const notes = await noteService.getNotes(req.params.courseCode, req.params.lessonCode)

    if (notes.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No data found with this details"
        })
    }

    return res.status(200).json({
        success: true,
        data: notes
    })
}

const updateNote = async (req, res) => {
    const note = await noteService.updateNote(req.body, req.params.noteId)

    if (!note) {
        return res.status(400).json({
            success : false,
            message : "not able to update try after some time"
        })
    }
    return res.status(200).json({
        success : true,
        message : "updated sucessfully"
    })
}

const deleteNote = async (req, res) =>{
    const note = await noteService.deleteNote(req.params.noteId)

    if(!note){
        return res.status(400).json({
            success : false,
            message : "not able to delete try after some time"
        })
    }
     return res.status(200).json({
        success : true,
        message : "deleted sucessfully"
    })
}


module.exports = {
    addNote,
    getNotes,
    updateNote,
    deleteNote
}