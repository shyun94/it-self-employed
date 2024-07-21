import { Post } from "./post";
import uuid from "react-native-uuid";

const posts: Post[] = [
  {
    id: uuid.v4() as string,
    title: "이름",
    content: "콘텐트",
    createdAt: new Date(),
  },
];

export const postUsecases = {
  getPosts: () => posts,
  createPost: (postReq: Omit<Post, "id">) => {
    const post: Post = {
      id: uuid.v4() as string,
      ...postReq,
    };

    posts.push(post);

    return post;
  },
};
