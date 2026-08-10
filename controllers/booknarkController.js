const bookmarkService = require("../services/bookmarkService")

const addBookmark = async(req, res)=>{
    const cousreCode = req.params.cousreCode
    const userId = req.user.userId
    const bookmark = await bookmarkService.addBookmark(userId,cousreCode)

    if(!bookmark){
        return res.status(400).json({
            success : false,
            message : "Bookmark failed" 
        })
    }
    return res.status(200).json({
        success: true,
        data : bookmark
    })
}

const getBookmark = async(req,res) =>{
    const userId = req.user.userId
    const getBookmark = await bookmarkService.getBookmarks(userId)
    
    if(!getBookmark){
        return res.status(400).json({
            success : false,
            message : "Bookmark failed" 
        })
    }
    return res.status(200).json({
        success: true,
        data : getBookmark
    })
}

const deleteBookMark = async(req,res)=> {
    const id = req.params.id
    const deletedBookmark = await bookmarkService.deleteBookmark(id)

    if(!deletedBookmark){
        return res.status(400).json({
            success : false,
            message : "Bookmark failed" 
        })
    }
    return res.status(200).json({
        success: true,
        data : deletedBookmark
    })
}

module.exports ={
    addBookmark,
    getBookmark,
    deleteBookMark
}