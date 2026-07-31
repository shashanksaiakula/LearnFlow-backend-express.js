const path = require("path");
const fs = require("fs/promises");

const { extractAudio } = require("../utils/ffmpeg");
const { generateTranscript } = require("../utils/whisper");
const { cleanTranscript } = require("../utils/transcriptCleaner");

async function generateVideoTranscript(videoUrl) {

    if (!videoUrl) {
        throw new Error("videoUrl is required.");
    }

    // Example:
    // http://192.168.1.7:3000/videos/reactnative/lesson1.mp4
    //
    // becomes:
    // /videos/reactnative/lesson1.mp4
    const url = new URL(videoUrl);

    const videoRelativePath = url.pathname.replace(/^\/+/, "");

    // videos/reactnative/lesson1.mp4
    const videoPath = path.join(videoRelativePath);

    // Folder -> reactnative
    const courseFolder = path.basename(path.dirname(videoPath));

    // lesson1
    const lessonName = path.parse(videoPath).name;

    const transcriptFolder = path.join(
        "transcripts",
        courseFolder
    );

    const transcriptPath = path.join(
        transcriptFolder,
        `${lessonName}.json`
    );

    const tempFolder = path.join(
        "temp",
        courseFolder
    );

    const wavPath = path.join(
        tempFolder,
        `${lessonName}.wav`
    );

    // Create folders if they don't exist
    await fs.mkdir(transcriptFolder, { recursive: true });
    await fs.mkdir(tempFolder, { recursive: true });

    try {

        await fs.access(transcriptPath);

        console.log("Using cached transcript...");

    } catch {

        console.log("Transcript not found. Generating...");

        // MP4 -> WAV
        await extractAudio(
            videoPath,
            wavPath
        );
        console.log("2. Audio extraction completed.");

console.log("3. Starting Whisper...");
        // WAV -> JSON
        await generateTranscript(
            wavPath,
            transcriptPath
        );
console.log("4. Whisper completed.");
        // Delete temporary WAV
        try {

            await fs.unlink(wavPath);

        } catch (error) {

            console.warn(
                "Unable to delete temporary audio:",
                error.message
            );

        }

    }

    const transcriptJson = await fs.readFile(
        transcriptPath,
        "utf-8"
    );

    const transcript = JSON.parse(transcriptJson);

    return cleanTranscript(transcript);

}

module.exports = {
    generateVideoTranscript
};