import dotenv from "dotenv";
dotenv.config();
import { getAdminToken } from "../config/token.js";
async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = await getAdminToken(email);
      res.cookie("token", token, {
        httpOnly: true, // cannot be accessed via JS
        secure: process.env.NODE_ENV === "production", // true on HTTPS
        sameSite: "strict", // prevent CSRF
        maxAge: 24 * 60 * 60 * 1000, // 1 day)
      });
      return res.status(200).json(token);
    } else {
      return res.status(400).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error on admin login",
    });
  }
}

function getCurrentAdmin(req,res){
  try{
  const email=req.email;
  if(!email){
    return res.status(400).json("admin not found")
  }
  return res.status(200).json({
    email,
    role:"admin"
  })}catch(error){
    return res.status(500).json(error)
  }
}


export {adminLogin,getCurrentAdmin};