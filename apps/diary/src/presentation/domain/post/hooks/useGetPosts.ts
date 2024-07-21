import { postUsecases } from "../../../../domain/usecases";

export const useGetPosts = () => {
  return { data: postUsecases.getPosts() };
};
