import express from "express";
import multer from "multer";
import addProduct from "../controllers/product";

const productRouter=express.Router()

productRouter.post("/addProduct",upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1},
    {name:"image4",maxCount:1},
]),addProduct)

export default productRouter;