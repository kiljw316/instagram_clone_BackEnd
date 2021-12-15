import express from "express";
import * as commentController from "../controllers/comment.js";
import * as postController from "../controllers/post.js";
// import isAuth from "../middleware/auth.js";

const router = express.Router();

//GET /comment/:itemId
router.get("/:postId/comment", commentController.getComments);

//POST /comment
// router.post("/:postId/comment", isAuth, commentController.createComment);
router.post("/:postId/comment", commentController.createComment);

//DELETE /comment/:commentId
// router.delete(
//   "/:postId/comment/:commentId",
//   isAuth,
//   commentController.deleteComment
// );
router.delete("/:postId/comment/:commentId", commentController.deleteComment);

//일단 post만드는 router
router.post("/", postController.createPost);
export default router;
