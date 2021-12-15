import express from "express";
// import itemRouter from "./item.js";
import commentRouter from "./comment.js";
// import userRouter from "./user.js";
// import { uploader } from "../middleware/uploader.js";

const router = express.Router();

router.use("/posts", commentRouter);
// router.use("/item", commentRouter);
// router.use("/auth", userRouter);
// router.post("/image", uploader.single("image"), (req, res, next) => {
//   res.status(201).json(req.url);
// });

export default router;
