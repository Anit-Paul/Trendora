import productModel from "../model/productModel.js";
import uploadOnCloudinary from "./cloudinary.js";

async function addProduct(req, res, next) {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Upload multiple images dynamically
    const images = {};
    for (let i = 1; i <= 4; i++) {
      if (req.files[`image${i}`] && req.files[`image${i}`][0]) {
        images[`image${i}`] = await uploadOnCloudinary(
          req.files[`image${i}`][0].path
        );
      }
    }

    // Parse sizes safely
    let parsedSizes = [];
    try {
      parsedSizes = JSON.parse(sizes);
    } catch {
      parsedSizes = [];
    }

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: parsedSizes,
      bestseller: bestseller === "true", // converts string to boolean
      date: Date.now(),
      ...images, // spread all images
    };

    const product = new productModel(productData);
    await product.save();

    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong in add product",
      error: error.message || error,
    });
  }
}

export default addProduct;
