import * as commentRepository from "../models/comment.js";

export async function createComment(req, res, next) {
  const { postId } = req.params;
  const { comment } = req.body;
  //   const user_id = res.locals.user.user_id;
  const user_id = "1";
  try {
    await commentRepository.create(postId, { comment, user_id });
    const msg = "댓글 작성 완료";
    return res.status(201).json(msg);
  } catch (error) {
    return res.status(404);
  }
}

export async function getComments(req, res, next) {
  //Todo
  //날짜순으로 sorting 해야함
  const { postId } = req.params;
  console.log(postId);
  try {
    const comments = await commentRepository.get(postId);
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

export async function updateComment(req, res, next) {
  const commentId = req.params.commentId;
  const { comment } = req.body;

  try {
    const result = await commentRepository.update(commentId, comment);
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
}

export async function deleteComment(req, res, next) {
  const commentId = req.params.commentId;
  try {
    const result = await commentRepository.remove(commentId);
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
}
