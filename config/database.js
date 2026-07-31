const mongoose = require("mongoose");

const connectDatabase = async () => {

    console.log("Inside connectDatabase");

    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is missing");
    }

    try {

        await mongoose.connect(mongoUri);

        console.log("✅ MongoDB Connected Successfully");

    } catch (error) {

        console.log("❌ Database Connection Failed");

        console.error(error);

        process.exit(1);
    }
};

module.exports = connectDatabase;