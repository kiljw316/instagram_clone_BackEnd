import likes from "../schemas/likes.js";
// 좋아요 에서 필요한 api,
// c r d

export const existLikes = async ({ postId, userId }) => {
  try {
    const result = await likes.findOne({ postId, userId });
    return result;
  } catch {
    return false;
  }
};

export const pushLikes = async ({ postId, userId }) => {
  try {
    const result = await likes.create({ postId, userId });
    return result;
  } catch {
    return false;
  }
};

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

export const countLikes = async (postId) => {
  try {
    const allLikes = await likes.find({ postId });
    const result = allLikes.length;
    return result;
  } catch {
    return false;
  }
};
