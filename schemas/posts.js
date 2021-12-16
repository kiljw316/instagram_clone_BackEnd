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


const post = posts.virtual("likeCount").get(async function () {
  try {
    const postId = this._id.toHexString();
    return await likes.countDocuments({ postId }).exec();
  } catch(err) {
    cosnsole.log(err);
  }
  // return 1
});

console.log(post);

posts.set("toJSON", {
  virtuals: true,
});


export default mongoose.model("posts", posts);

