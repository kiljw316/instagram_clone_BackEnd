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

//PUT /comment/:commentId
// router.put(
//   "/:postId/comment/:commentId",
//   isAuth,
//   commentController.updateComment
// );
router.put("/:postId/comment/:commentId", commentController.updateComment);

//DELETE /comment/:commentId
// router.delete(
//   "/:postId/comment/:commentId",
//   isAuth,
//   commentController.deleteComment
// );
router.delete("/:postId/comment/:commentId", commentController.deleteComment);

router.post("/", postController.createPost);
export default router;
