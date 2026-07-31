const express = require("express");
const router = express.Router();

const {
    generateVideoTranscript
} = require("../services/transcriptService");

router.post("/transcript", async (req, res) => {

    try {
    const { videoUrl } = req.body;

    
        if (!videoUrl) {

            return res.status(400).json({
                success: false,
                message: "videoUrl is required."
            });

        }

        const transcript = await generateVideoTranscript(videoUrl);

        return res.status(200).json({
            success: true,
            transcript
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

module.exports = router;