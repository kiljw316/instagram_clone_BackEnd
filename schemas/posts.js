import mongoose from "mongoose";
import likes from "./likes.js";

const posts = new mongoose.Schema(
  {
    userId: {
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
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

posts.virtual("likeCount").get(function () {
  const postId = this._id.toHexString();
  const likeCount = likes.countDocuments({ postId });
  // const likeCount = likes.countDocuments({ postId }).then((likeCount) => {
  //   const result = likeCount;
  //   console.log(result);
  //   return result;
  // });
  console.log(likeCount);
  return 3;
});

// async function countlikes(postId) {
//   return await likes.countDocuments({ postId });
// }

// console.log(post);

// posts.set("toJSON", {
//   virtuals: true,
// });

export default mongoose.model("posts", posts);
