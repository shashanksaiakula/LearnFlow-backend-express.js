const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

const homeRouter = require("./routes/home");
const courseRouter = require("./routes/courses");
const lessonRouter = require("./routes/lesson")
const transcript = require("./routes/transcript")
const auth = require("./routes/auth");
const connectDatabase = require("./config/database");
// const authenticateToken = require("./middleware/authMiddleware");
// const db = require("./config/database")

app.use(express.json());
app.use(homeRouter);
app.use(courseRouter);
app.use(lessonRouter);
app.use(transcript)
app.use("/auth",auth)
app.use(
    "/videos",
    express.static(path.join(__dirname, "videos"))  
);
connectDatabase()

app.listen(PORT, () => {
    console.log(`🚀 LearnFlow Backend running on port ${PORT}`);
});