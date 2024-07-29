import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// connect to the database
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;