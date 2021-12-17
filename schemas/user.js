import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    default: "/profile.png",
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
