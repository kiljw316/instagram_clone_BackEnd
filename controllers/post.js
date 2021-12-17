import express from "express";
import { addPost, readAllPost, deletePost, readDetailPost } from "../models/post.js";
import { pushLikes, countLikes, cancleLikes, existLikes, userLikesPost } from "../models/likes.js";
import { verifyToken } from "../middleware/middleware.js";
import { upload } from "../middleware/uploads.js";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, async (req, res) => {
    const userId = req.user._id;

    let posts = await readAllPost();
    const postIdArray = [];
    const likes = [];
    for (let i = 0; i < posts.length; i++) {
      const postId = posts[i]["_id"].toHexString();
      postIdArray.push(postId);
      const count = await countLikes(postId);
      posts[i].likes;
      posts[i].likes = count;
      likes[i] = false;
    }

    const userlikesPost = await userLikesPost(userId);
    const userlikePostId = [];
    for (let i = 0; i < userlikesPost.length; i++) {
      const postId = userlikesPost[i].postId;
      userlikePostId.push(postId);
    }

    for (let i = 0; i < postIdArray.length; i++) {
      for (let j = 0; j < userlikePostId.length; j++) {
        if (userlikePostId[j] == postIdArray[i]) {
          likes[i] = true;
        }
      }
    }
    // console.log(likes);
    res.status(200).send({ posts, likes });
  })
  .post(verifyToken, upload.single("file"), async (req, res) => {
    try {
      const userId = req.user._id;
      const nickname = req.user.nickname;
      const { content } = req.body;
      const path = req.file.path;
      const mimetype = req.file.mimetype;
      const upload = { path, mimetype };
      const result = await addPost({ userId, nickname, content, upload });
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
  .get(verifyToken, async (req, res) => {
    try {
      const postId = req.params.postId;
      const result = await readDetailPost(postId);
      const count = await countLikes(postId);
      result.likes = count;
      res.status(200).send({ result });
    } catch {
      res.status(400);
    }
  })
  .post(verifyToken, async (req, res) => {
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

router.route("/:postId/like").post(verifyToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = req.params.postId;
    const existLike = await existLikes({ userId, postId });
    if (!existLike) {
      await pushLikes({ userId, postId });
      res.status(200).json({ msg: "좋아요!" });
      return;
    } else {
      await cancleLikes({ userId, postId });
      res.status(200).json({ msg: "별로에요!" });
      return;
    }
  } catch {
    res.status(400);
  }
});

export default router;
