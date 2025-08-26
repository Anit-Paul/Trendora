import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";
import productRouter from "./routes/productRouter.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// OR allow specific frontend origin
app.use(cors({
  origin: [process.env.Frontend_URL,process.env.ADMIN_URL], // your frontend
  methods: ["GET", "POST"],        // allowed methods
  credentials: true                // allow cookies/auth
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.use("/api/product",productRouter);

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
