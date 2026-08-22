const fs = require("fs");
const path = require("path");

const ROOT = process.env.LLM_ROOT || path.join(process.cwd(), "llm");

function resolveFirstExisting(candidates) {
    for (const candidate of candidates) {
        if (!candidate) continue;

        if (fs.existsSync(candidate)) {
            return candidate;
        }
    }

    return null;
}

const WHISPER_PATH =
    process.env.WHISPER_PATH ||
    resolveFirstExisting([
        path.join(ROOT, "whisper", "Release", "whisper-cli.exe"),
        path.join(ROOT, "whisper", "Release", "whisper-cli"),
        process.platform === "win32" ? "whisper.exe" : null,
        process.platform === "win32" ? "whisper" : null,
        "/usr/local/bin/whisper",
        "/usr/bin/whisper"
    ]);

const MODEL_PATH =
    process.env.MODEL_PATH ||
    resolveFirstExisting([
        path.join(ROOT, "models", "ggml-base.en.bin"),
        path.join(process.cwd(), "models", "ggml-base.en.bin"),
        "/app/models/ggml-base.en.bin"
    ]);

module.exports = {
    WHISPER_PATH,
    MODEL_PATH
};