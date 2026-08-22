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

        const isDependencyFailure = /ffmpeg|whisper|not found|unavailable/i.test(error.message || "");

        return res.status(isDependencyFailure ? 503 : 500).json({
            success: false,
            message: isDependencyFailure
                ? "Transcript generation is unavailable on this server because the required FFmpeg/Whisper dependencies are missing or misconfigured."
                : error.message
        });

    }

});

module.exports = router;