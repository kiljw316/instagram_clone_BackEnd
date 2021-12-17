import express from "express";
import postRouter from "../controllers/post.js";
// import itemRouter from "./item.js";

import userRouter from "./user.js";
import commentRouter from "./comment.js";


const router = express.Router();

router.use("/posts", postRouter);
router.use("/posts", commentRouter);
router.use("/auth", userRouter);


export default router;
