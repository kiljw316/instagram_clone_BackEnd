import express from "express";
import * as commentController from "../controllers/comment.js";
import { verifyToken } from "../middleware/middleware.js";

const router = express.Router();

//GET /comment/:itemId
router.get("/:postId/comments", commentController.getComments);

//POST /comment

router.post("/:postId/comments", verifyToken, commentController.createComment);

//DELETE /comment/:commentId

router.post("/:postId/comments/:commentId", verifyToken, commentController.deleteComment);


export default router;
