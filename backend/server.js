import dotenv from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connect.js";
import ordersRoutes from "./routes/orders.js";
import categoriesRoutes from "./routes/categories.js";

dotenv.config(); // Loading environment variables from a .env file
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // Middleware to parse incoming requests with JSON payloads (req.body)

app.use("/api/orders", ordersRoutes);
app.use("/api/categories", categoriesRoutes);

// Starting the server and connecting to MongoDB
app.listen(PORT, () => {
    connectToMongoDB();
    console.log('listening on port ' + PORT);
});