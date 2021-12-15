import posts from "../schemas/posts.js";

export const addPost = async ({ userId, content, upload }) => {
    // const post = new posts({ userId, content, upload, comments });
    // await post.save();
    // return true;
    await posts.create({ userId, content, upload });
    return true;
}

export const readAllPost = async () => {
    const result = await posts.find({});
    return result;
}

export const deletePost = (postId) => {
    const result = posts.deleteOne({ "_id": postId });
    return result;
}