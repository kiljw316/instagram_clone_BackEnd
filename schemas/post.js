import mongoose from "mongoose";
// import likes from "./likes.js";

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  upload: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Number,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

// toJSON: { virtuals: true }
// postSchema.virtual("likeCount").get(function () {
//   const postId = this._id.toHexString();
//   const likeCount = likes.countDocuments({ postId });
//   const likeCount = likes.countDocuments({ postId }).then((likeCount) => {
//     const result = likeCount;
//     console.log(result);
//     return result;
//   });
//   console.log(likeCount);
//   return 3;
// });

// async function countlikes(postId) {
//   return await likes.countDocuments({ postId });
// }

// console.log(post);

// postSchema.set("toJSON", {
//   virtuals: true,
// });

export default mongoose.model("Post", postSchema);
