import express from "express";
import posts from "../controllers/posts.js";
// import itemRouter from "./item.js";
<<<<<<< HEAD
import userRouter from "./user.js";
import commentRouter from "./comment.js";
=======
// import commentRouter from "./comment.js";
// import userRouter from "./user.js";
>>>>>>> 2fd02612f68edb4d6c93609c63c28c576844d88d
// import { uploader } from "../middleware/uploader.js";

const router = express.Router();

router.use("/posts", posts);
router.use("/posts", commentRouter);
// router.use("/item", commentRouter);
// router.use("/auth", userRouter);
// router.post("/image", uploader.single("image"), (req, res, next) => {
//   res.status(201).json(req.url);
// });

export default router;
