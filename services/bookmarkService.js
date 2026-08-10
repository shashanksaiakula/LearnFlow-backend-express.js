const Bookmark = require("../models/bookmark")

async function getBookmarks(userId){
    return await Bookmark.find({userId})
}

async function addBookmark(userId, courseCode){
    const bookmark = Bookmark.create({
        userId,
        courseCode
    })
    return bookmark
}

async function deleteBookmark(id){
    return await Bookmark.deleteOne({_id : id})
}

module.exports = {
    getBookmarks,
    addBookmark,
    deleteBookmark
}