import express from "express";
import { RegisterAPI,LoginAPI,LogoutAPI, googleSignUp,googleLogin } from "../controllers/auth.js";
const authRouter=express.Router()

authRouter.post("/register",RegisterAPI);
authRouter.post("/googleRegister", googleSignUp);
authRouter.post("/login",LoginAPI);
authRouter.post("/googleLogin",googleLogin);
authRouter.post("/logout",LogoutAPI);

export default authRouter;