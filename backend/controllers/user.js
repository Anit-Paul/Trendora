import userModel from "../model/userModel.js";

async function getCurrentUser(req, res) {
  try {
    const user = await userModel.findById(req.userId).select("-password"); //for removing password
    if (user) {
      return res.status(200).json({
        user: user,
      });
    } else {
      return res.status(400).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
}
export default getCurrentUser;