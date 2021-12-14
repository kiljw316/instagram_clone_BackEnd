import mongoose from "mongoose";

//comment schema definition
const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);
//

//To use our schema definition, we need to convert our schema into a Model we can work with.
export default mongoose.model("Comment", commentSchema);
