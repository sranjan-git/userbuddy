import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Middleware
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/";
console.log("MongoDB URI:", mongoURI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Default route
app.get("/", (req, res) => {
  res.send("User Buddy API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
