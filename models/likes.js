import likes from "../schemas/likes.js";
import posts from "../schemas/posts.js";
// 좋아요 에서 필요한 api,
// c r d

// 좋아요가 존재하는지 확인하는 function
export const existLikes = async ({ postId, userId }) => {
  try {
    const result = await likes.findOne({ postId, userId });
    return result;
  } catch {
    return false;
  }
};

// 좋아요 생성 function
export const pushLikes = async ({ postId, userId }) => {
  try {
    const result = await likes.create({ postId, userId });
    return result;
  } catch {
    return false;
  }
};

// 좋아요 삭제 function
export const cancleLikes = async ({ postId, userId }) => {
  try {
    const result = await likes.deleteOne({ postId, userId });
    if (result < 1) {
      return false;
    }
    return result;
  } catch {
    return false;
  }
};

// 좋아요 삭제해주는 function
export const countLikes = async (postId) => {
  try {
    const allLikes = await likes.find({ postId });
    const result = allLikes.length;
    return result;
  } catch {
    return false;
  }
};

export const userLikesPost = async (userId) => {
  try {
    const result = likes.find({ userId });
    return result;
  } catch {
    return false;
  }
};
