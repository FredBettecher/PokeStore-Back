import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import {
  userSchemaValidation,
  signInBodyValidation,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;
