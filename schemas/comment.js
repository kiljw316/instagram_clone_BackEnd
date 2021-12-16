import mongoose from "mongoose";
// import { useVirtualId, toJsonVirtuals } from "../utils/schema.js";

//comment schema definition
const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Number, default: new Date().getTime() },
});
//

// useVirtualId(commentSchema);
// toJsonVirtuals(commentSchema);
//To use our schema definition, we need to convert our schema into a Model we can work with.
export default mongoose.model("Comment", commentSchema);
