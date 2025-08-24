import jwt from "jsonwebtoken";
async function isAdmin(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({
        message: "user does not have a token",
      });
    }
    const verifyToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!verifyToken){
        return res.status(400).json({
        message: "user is not a verified user!",
      });
    }
    req.email=verifyToken.email;
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error for admin verification!",
    });
  }
  next()
}
export default isAdmin;
