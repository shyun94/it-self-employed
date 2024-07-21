import { Post } from "../../../../domain/post";
import { postUsecases } from "../../../../domain/usecases";

export const useCreatePost = () => {
  const mutate = (post: Omit<Post, "id">) => {
    const createdPost = postUsecases.createPost(post);

    return createdPost;
  };

  return { mutate };
};
