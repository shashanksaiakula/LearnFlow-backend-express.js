function cleanTranscript(transcript) {

    if (!transcript || !transcript.transcription) {
        return [];
    }

    return transcript.transcription.map(segment => ({
        start: segment.offsets.from / 1000,
        end: segment.offsets.to / 1000,
        text: segment.text.trim()
    }));

}

module.exports = {
    cleanTranscript
};