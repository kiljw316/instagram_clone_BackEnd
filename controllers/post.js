import * as postRepository from "../models/post.js";

export async function createPost(req, res, next) {
  try {
    const { content } = req.body;
    //   const userId = res.locals.user.userId;
    const userId = "1";
    await postRepository.create({
      content,
      userId,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
