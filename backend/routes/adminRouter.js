import express from "express";
import {adminLogin,getCurrentAdmin} from "../controllers/admin.js"
import isAdmin from "../middleware/isAdmin.js";
const adminRouter=express.Router()

adminRouter.post("/login",adminLogin);
adminRouter.post("/getAdmin",[isAdmin,getCurrentAdmin]);
export default adminRouter;