const { spawn } = require("child_process");

async function extractAudio(inputVideoPath, outputAudioPath) {
    return new Promise((resolve, reject) => {

        const process = spawn("ffmpeg", [
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