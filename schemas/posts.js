import mongoose from "mongoose";

const posts = new mongoose.Schema({
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
});

export default mongoose.model("posts", posts);
