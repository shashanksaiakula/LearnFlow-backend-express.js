const fs = require("fs");
const path = require("path");

const ROOT_CANDIDATES = [
    process.env.LLM_ROOT,
    "F:\\LLM",
    "C:\\LLM",
    path.join(process.cwd(), "llm"),
    path.join(process.cwd(), "models")
].filter(Boolean);

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
        ...ROOT_CANDIDATES.map((root) =>
            path.join(root, "whisper", "Release", "whisper-cli.exe")
        ),
        ...ROOT_CANDIDATES.map((root) =>
            path.join(root, "whisper", "Release", "whisper-cli")
        ),
        ...ROOT_CANDIDATES.map((root) =>
            path.join(root, "whisper", "Release", "whisper.exe")
        ),
        "whisper",
        "whisper.exe",
        "/usr/local/bin/whisper",
        "/usr/bin/whisper"
    ]);

const MODEL_PATH =
    process.env.MODEL_PATH ||
    resolveFirstExisting([
        ...ROOT_CANDIDATES.map((root) =>
            path.join(root, "models", "ggml-base.en.bin")
        ),
        path.join(process.cwd(), "models", "ggml-base.en.bin"),
        "/app/models/ggml-base.en.bin"
    ]);

module.exports = {
    WHISPER_PATH,
    MODEL_PATH
};