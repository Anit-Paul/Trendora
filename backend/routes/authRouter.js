import express from "express";
import { RegisterAPI,LoginAPI,LogoutAPI } from "../controllers/auth.js";
const authRouter=express.Router()

authRouter.post("/register",RegisterAPI);
authRouter.post("/login",LoginAPI);
authRouter.post("/logout",LogoutAPI);

export default authRouter;