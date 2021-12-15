import mongoose from "mongoose";

export const objectIdChange = (stringId) =>
  new mongoose.mongo.ObjectId(stringId);
