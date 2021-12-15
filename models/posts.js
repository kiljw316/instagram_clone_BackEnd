import posts from "../schemas/posts.js";

export const addPost = async ({ userId, content, upload }) => {
  // const post = new posts({ userId, content, upload, comments });
  // await post.save();
  // return true;
  try {
    await posts.create({ userId, content, upload });
    return true;
  } catch {
    return false;
  }
};

export const readAllPost = async () => {
  const result = await posts.find({});
  return result;
};

export const deletePost = async (postId) => {
  try {
    const result = await posts.deleteOne({ _id: postId });
    if (result < 1) {
      return false;
    }
    return result;
  } catch (err) {
    return false;
  }
};

export const readPost = async (postId) => {
  const result = await posts.findById({ _id: postId });
  return result;
};
