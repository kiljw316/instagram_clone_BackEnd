import Comment from "../schemas/comment.js";
import Post from "../schemas/post.js";

export async function get(post_id) {
  // 성진님 post하나 찾는거 만든걸로 이용해서 만들자
  //    ex) import {getByPostId} from "../models/post.js"
  //    ex) await getByPostId(post_id)
  try {
    const post = await Post.findById(post_id).exec();
    return post.comments;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function create(post_id, commentObj) {
  return Post.updateOne(
    { _id: post_id },
    { $push: { comments: commentObj } }
  ).exec();
}

export function update(commentId, comment) {
  return Comment.findByIdAndUpdate(
    commentId,
    { comment },
    { returnOriginal: false }
  );
}

export function remove(commentId) {
  return Comment.findByIdAndDelete(commentId);
}
