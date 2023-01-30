import { Router } from "express";
import { saleOff } from "../controllers/saleoff.controller.js";
import { products } from "../controllers/products.controller.js";
import product from "../controllers/product.controller.js";

const saleOffRoute = Router();
const productsRoute = Router();
const productRoute = Router();
 
saleOffRoute.get("/", saleOff);
productsRoute.get(`/products`, products);
productRoute.get("/product", product);

const productsRoutes = { saleOffRoute, productsRoute, productRoute };
export default productsRoutes