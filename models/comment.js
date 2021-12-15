import Comment from "../schemas/comment.js";
import Post from "../schemas/post.js";

export async function get(postId) {
  // 성진님 post하나 찾는거 만든걸로 이용해서 만들자
  //    ex) import {getByPostId} from "../models/post.js"
  //    ex) await getByPostId(postId)
  try {
    const post = await Post.findById(postId).exec();
    return post.comments;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function create({ postId, commentObj }) {
  try {
    const comment = await Comment.create(commentObj);
    return Post.updateOne(
      { _id: postId },
      { $push: { comments: comment } }
    ).exec();
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export function update({postId, commentObj}) {
//   const { comment, commentId } = commentObj;
//   return Post.updateOne(
//     { _id: postId, "comments._id": commentId },
//     { $set: { "comments.$.comment": comment } }
//   ).exec();
//   //   return Comment.findByIdAndUpdate(
//   //     commentId,
//   //     { comment },
//   //     { returnOriginal: false }
//   //   );
// }
export function remove({ postId, commentId }) {
  return Post.findByIdAndUpdate(
    postId,
    {
      $pull: { comments: { _id: commentId } },
    },
    { new: true }
  );
}

// export function remove(commentId) {
//   return Comment.findByIdAndDelete(commentId);
// }
