import mongoose from "mongoose";

//comment schema definition
const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true },
    comments: { type: Array },
  },
  { timestamps: true }
);
//

//To use our schema definition, we need to convert our schema into a Model we can work with.
export default mongoose.model("Post", postSchema);
