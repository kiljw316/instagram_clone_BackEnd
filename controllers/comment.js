import * as commentRepository from "../models/comment.js";

export async function createComment(req, res, next) {
  const { postId } = req.params;
  const { comment } = req.body;
  const userId = req.user._id;
  const commentObj = { comment, userId };
  try {
    await commentRepository.create({ postId, commentObj });
    const msg = "댓글 작성 완료";
    return res.status(201).json({ msg });
  } catch (error) {
    return res.status(500);
  }
}

export async function getComments(req, res, next) {
  //Todo
  //날짜순으로 sorting 해야함
  const { postId } = req.params;
  try {
    const comments = await commentRepository.get(postId);
    return res.status(200).json({ comments });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function deleteComment(req, res, next) {
  try {
    const { postId, commentId } = req.params;
    const userId = req.user._id;
    const userIdFromComment = await commentRepository.getUserId(commentId);
    if (userId !== userIdFromComment) {
      return res.sendStatus(500);
    }
    await commentRepository.remove({ postId, commentId });
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
