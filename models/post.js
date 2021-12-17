import Post from "../schemas/post.js";

// 게시글 작성 function
export const addPost = async ({ userId, content, upload, nickname }) => {
  try {
    await Post.create({ userId, content, upload, nickname });
    return true;
  } catch {
    return false;
  }
};

// 게시글 조회 function
export const readAllPost = async () => {
  const result = await Post.find({}).sort({ createdAt: -1 });
  return result;
};

// 게시글 삭제 function
export const deletePost = async (postId) => {
  try {
    const result = await Post.deleteOne({ _id: postId });
    if (result < 1) {
      return false;
    }
    return result;
  } catch {
    return false;
  }
};

// 게시글 상세 조회 function
export const readDetailPost = async (postId) => {
  const result = await Post.findById({ _id: postId });
  return result;
};
