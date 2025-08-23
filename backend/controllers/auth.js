import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import {getToken} from "../config/token.js";

async function RegisterAPI(req, res) {
  try {
    const { name, email, password } = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "please enter a valid email",
      });
    }
    if (password.length < 4 || password.length > 8) {
      return res.status(400).json({
        message: "password length should be in range of length 4-8",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({ name, email, password: hashPassword });
      const user = await newUser.save();
      const token = await getToken(user._id);
      res.cookie("token", token, {
        httpOnly: true, // cannot be accessed via JS
        secure: process.env.NODE_ENV === "production", // true on HTTPS
        sameSite: "strict", // prevent CSRF
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      return res.status(201).json({
        message: "User created successfully",
        user: user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

async function LoginAPI(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }
    const token = await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // cannot be accessed via JS
      secure: process.env.NODE_ENV === "production", // true on HTTPS
      sameSite: "strict", // prevent CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.status(201).json({
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
}

function LogoutAPI(req, res) {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
}

async function googleSignUp(req, res) {
  try {
    const { name, email } = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = new userModel({ name, email });
    const user = await newUser.save();
    const token =await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // cannot be accessed via JS
      secure: process.env.NODE_ENV === "production", // true on HTTPS
      sameSite: "strict", // prevent CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Google sign-up failed",
      error: error.message,
    });
  }
}

async function googleLogin(req, res) {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const token =await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // cannot be accessed via JS
      secure: process.env.NODE_ENV === "production", // true on HTTPS
      sameSite: "strict", // prevent CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.status(200).json({
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Google login failed",
      error: error.message,
    });
  }
}
export { RegisterAPI, LoginAPI, LogoutAPI, googleSignUp, googleLogin };
