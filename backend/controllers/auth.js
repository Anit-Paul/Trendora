import userModel from "../model/userModel";
import validator from "validator";
import bcrypt from "bcryptjs";

async function RegisterAPI(req, res) {
  try {
    const { name, email, password } = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      res.status(400).json({
        message: "User already exists",
      });
    }
    if (!validator.isEmail(email)) {
      res.status(400).json({
        message: "please enter a valid email",
      });
    }
    if (password.length < 4 || password.length > 8) {
      res.status(400).json({
        message: "password length should be in range of length 4-8",
      });
    } else {
      const hashPassword = bcrypt(password, 10);
      const newUser = new userModel({ name, email, password: hashPassword });
      await newUser.save();
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}
