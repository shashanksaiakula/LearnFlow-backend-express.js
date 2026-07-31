const path = require("path");

const ROOT = "F:\\LLM";

module.exports = {
    WHISPER_PATH: path.join(
        ROOT,
        "whisper",
        "Release",
        "whisper-cli.exe"
    ),

    MODEL_PATH: path.join(
        ROOT,
        "models",
        "ggml-base.en.bin"   // <-- your actual model file
    )
};