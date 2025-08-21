import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth",authRouter);

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
