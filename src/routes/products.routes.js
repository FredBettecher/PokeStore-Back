import { Router } from "express";
import { saleOff } from "../controllers/saleoff.controller.js";

const saleOffRoute = Router();

saleOffRoute.get("/", saleOff);

export default saleOffRoute