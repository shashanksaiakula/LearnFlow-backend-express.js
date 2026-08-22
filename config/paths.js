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

    return candidates[candidates.length - 1] || null;
}

const WHISPER_PATH = resolveFirstExisting([
    process.env.WHISPER_PATH,
    path.join(ROOT, "whisper", "Release", "whisper-cli.exe"),
    path.join(ROOT, "whisper", "Release", "whisper-cli"),
    "whisper",
    "whisper.exe"
]);

const MODEL_PATH = resolveFirstExisting([
    process.env.MODEL_PATH,
    path.join(ROOT, "models", "ggml-base.en.bin"),
    path.join(process.cwd(), "models", "ggml-base.en.bin")
]);

module.exports = {
    WHISPER_PATH,
    MODEL_PATH
};