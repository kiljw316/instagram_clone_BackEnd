import mongoose from "mongoose";

const likes = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("likes", likes);
