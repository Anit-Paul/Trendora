import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary once (not inside the function)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto", // handles images/videos automatically
    });

    fs.unlinkSync(filePath); // remove local file
    return uploadResult.secure_url; // only return URL
  } catch (error) {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // clean up if error
    }
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

export default uploadOnCloudinary;
