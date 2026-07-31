const { spawn } = require("child_process");
const { WHISPER_PATH, MODEL_PATH } = require("../config/paths");
const fs = require("fs/promises");
const path = require("path");

async function generateTranscript(audioPath, outputJsonPath) {

    return new Promise((resolve, reject) => {

        // Validation
        if (!audioPath) {
            return reject(new Error("Audio path is required"));
        }

        // Start Whisper
        const process = spawn(WHISPER_PATH, [
            "-m",
            MODEL_PATH,
            "-f",
            audioPath,
            "-oj",
            outputJsonPath
        ]);

        // Normal logs
        process.stdout.on("data", (data) => {
            console.log(data.toString());
        });

        // Error logs
        process.stderr.on("data", (data) => {
            console.error(data.toString());
        });

        // Process completed
        process.on("close", async (code) => {

            if (code !== 0) {
                return reject(
                    new Error(`Whisper exited with code ${code}`)
                );
            }

            try {

                // Whisper always creates:
                // lesson1.wav.json
                const generatedJson = audioPath + ".json";

                // Ensure destination folder exists
                await fs.mkdir(path.dirname(outputJsonPath), {
                    recursive: true
                });

                // Move generated JSON to your desired location
                await fs.rename(generatedJson, outputJsonPath);

                resolve(outputJsonPath);

            } catch (error) {
                reject(error);
            }

        });

        // Process failed to start
        process.on("error", (error) => {
            return reject(error);
        });

    });
}

module.exports = {
    generateTranscript
};