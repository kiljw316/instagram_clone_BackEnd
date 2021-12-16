import likes from "../schemas/likes.js";
import posts from "../schemas/posts.js";
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

export const usersLike = async (userId) => {
  try {
    const postIdArray = [];
    const allBoards = await posts.find({});
    for (let i = 0; i < allBoards.length; i++) {
      const findPostId = allBoards[i]._id.toHexString();
      postIdArray.push(findPostId);
    }
    // console.log(postIdArray);
    const userLikeArray = [];
    const allLikes = await likes.find({ userId });
    // console.log(allLikes.postId);
    for (let i = 0; i < postIdArray.length; i++) {
      for (let j = 0; j < allLikes.length; j++) {
        if (postIdArray[i] == allLikes[i].postId) {
          userLikeArray.push(true);
          break;
        } else {
          userLikeArray.push(false);
          break;
        }
      }
    }
    console.log(userLikeArray);
    return userLikeArray;
  } catch {
    return false;
  }
};
