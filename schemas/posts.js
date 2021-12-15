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
  { timestamps: true }
);

posts.virtual("likeCount").get(async function () {
  const postId = this._id.toString();
  const count = await likes.countDocuments({ postId });
  return count;
});

posts.set({
  virtuals: true,
});

export default mongoose.model("posts", posts);
