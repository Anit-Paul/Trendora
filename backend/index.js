import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const app = express();
app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to Trendora Backend",
  });
});
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  connectDB()
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
});
