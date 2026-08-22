const { spawn } = require("child_process");
const ffmpegPath = require("ffmpeg-static");

async function extractAudio(inputVideoPath, outputAudioPath) {
    return new Promise((resolve, reject) => {
        if (!ffmpegPath) {
            return reject(
                new Error(
                    "FFmpeg binary is unavailable. Ensure ffmpeg-static is installed and the runtime can access it."
                )
            );
        }

        const process = spawn(ffmpegPath, [
            "-y",
            "-i",
            inputVideoPath,
            "-vn",
            outputAudioPath
        ]);

        process.on("close", (code) => {
            if (code === 0) {
                resolve(outputAudioPath);
            } else {
                reject(
                    new Error(`FFmpeg exited with code ${code}`)
                );
            }
        });

        process.on("error", (error) => {
            reject(error);
        });

    });
}

module.exports = {
    extractAudio
};