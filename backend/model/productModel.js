import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: [String], required: true }, // specify array of strings
    date: { type: Date, required: true },      // or Number if you prefer Unix timestamp
    bestseller: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);


const productModel = model("Product", productSchema);

export default productModel;
