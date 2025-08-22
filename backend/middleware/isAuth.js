import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
async function isAuth(req, res, next) {
  
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({
        message: "user does not have a token",
      });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    if (!verifyToken) {
      return res.status(400).json({
        message: "user is not verified",
      });
    }
    req.userId = verifyToken.userId;
    
    next();
  } catch (error) {
    return res.status(500).json({
      message: "token verification failed",
    });
  }
}
export default isAuth;
