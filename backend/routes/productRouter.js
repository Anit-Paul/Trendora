import express from "express";
import upload from "../middleware/multer.js";
import {addProduct,listProduct,deleteProduct} from "../controllers/product.js";

const productRouter=express.Router()

productRouter.post("/addProduct",upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1},
    {name:"image4",maxCount:1},
]),addProduct)

productRouter.post("/listProduct",listProduct)
productRouter.post("/deleteProduct",deleteProduct)
export default productRouter;