import posts from "../schemas/posts.js";

// 게시글 작성 function
export const addPost = async ({ userId, content, upload, createdAt }) => {
  try {
    await posts.create({ userId, content, upload, createdAt });
    return true;
  } catch {
    return false;
  }
};

// 게시글 조회 function
export const readAllPost = async () => {
  const result = await posts.find({});
  return result;
};

// 게시글 삭제 function
export const deletePost = async (postId) => {
  try {
    const result = await posts.deleteOne({ _id: postId });
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
  const result = await posts.findById({ _id: postId });
  return result;
};
