const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

const homeRouter = require("./routes/home");
const courseRouter = require("./routes/courses");
const lessonRouter = require("./routes/lesson")
const transcript = require("./routes/transcript")
const auth = require("./routes/auth");
const note = require("./routes/note");
const enroll = require('./routes/emrollment')
const bookmark = require('./routes/bookmark')
const connectDatabase = require("./config/database");
// const authenticateToken = require("./middleware/authMiddleware");
// const db = require("./config/database")

app.use(express.json());
app.use(homeRouter);
app.use(courseRouter);
app.use(lessonRouter);
app.use(transcript)
app.use(note)
app.use("/auth",auth)
app.use(enroll)
app.use(bookmark)

app.use(
    "/assets",
    express.static(path.join(__dirname, "assets"))
);
app.use(
    "/videos",
    express.static(path.join(__dirname, "videos"))  
);
async function startServer() {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`🚀 LearnFlow Backend running on port ${PORT}`);
    });
}

startServer();