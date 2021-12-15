import Post from "../schemas/post.js";

export function create({ content, userId }) {
  return Post.create({ content, userId });
}
