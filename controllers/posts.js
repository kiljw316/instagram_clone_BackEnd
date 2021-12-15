import express from "express";
import { addPost, readAllPost, deletePost, readPost } from "../models/posts.js";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const posts = await readAllPost();
    res.status(200).send({ posts });
  })
  .post(async (req, res) => {
    try {
      // const userId = res.locals;
      // const { content, upload } = req.body;
      const { userId, content, upload } = req.body;
      const result = await addPost({ userId, content, upload });
      if (result !== true) {
        res.status(400).send({ msg: "게시글 작성 실패" });
      }
      res.status(201).send({ msg: "게시글 작성 성공" });
    } catch {
      res.status(400);
    }
  });

router
  .route("/:postId")
  .get(async (req, res) => {
    try {
      const postId = req.params.postId;
      const result = await readPost(postId);
      res.status(200).send({ result });
    } catch {
      res.status(400);
    }
  })
  .delete(async (req, res) => {
    try {
      const postId = req.params.postId;
      const result = await deletePost(postId);
      if (result.deletedCount !== 1) {
        res.status(400).json({ msg: "게시글 삭제 실패" });
        return;
      }
      res.status(200).json({ msg: "게시글 삭제 완료" });
    } catch {
      res.status(400);
    }
  });

export default router;
