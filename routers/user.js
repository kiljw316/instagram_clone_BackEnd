import express from "express";
import * as userController from "../controllers/user.js";
import { authenticateUser } from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", authenticateUser(), userController.me);
export default router;
