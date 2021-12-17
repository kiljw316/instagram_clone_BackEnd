import Comment from "../schemas/comment.js";
import Post from "../schemas/post.js";
// import User from "../schemas/user.js";
import { objectIdChange } from "../utils/typeChange.js";

export async function getUserId(commentId) {
  try {
    const comment = await Comment.findById(commentId).exec();
    return comment.userId;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function get(postId) {
  // 성진님 post하나 찾는거 만든걸로 이용해서 만들자
  //    ex) import {getByPostId} from "../models/post.js"
  //    ex) await getByPostId(postId)
  try {
    const post = await Post.findById(postId).exec();
    return post.comments
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function create({ postId, commentObj }) {
  try {
    const comment = await Comment.create(commentObj);
    return Post.updateOne({ _id: postId }, { $push: { comments: comment } }).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function remove({ postId, commentId }) {
  //   try {
  //     const post = await Post.findById(postId);
  //     console.log(post);
  //     return post.comments.pull({ comment: "comment1" });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  //   //   되는 케이스
    // try {
    //   return Post.updateOne(
    //     { _id: objectIdChange(postId) },
    //     { $pull: { comments: { _id: objectIdChange(commentId) } } }
    //   );
    // } catch (error) {
    //   throw new Error(error);
    // }
  try {
    return Post.findOneAndUpdate(
      { _id: postId },
      {
        //   type변경 안하는 방법 없나
        $pull: { comments: { _id: objectIdChange(commentId) } },
      }
    )
  } catch (error) {
    throw new Error(error);
  }
}
