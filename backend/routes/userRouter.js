import express from "express";
import isAuth from "../middleware/isAuth.js";
import getCurrentUser from "../controllers/user.js";

const userRouter=express.Router()

userRouter.get("/getUser",isAuth,getCurrentUser)

export default userRouter;