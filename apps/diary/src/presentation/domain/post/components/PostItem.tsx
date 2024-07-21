import { Text, View } from "react-native";
import { Post } from "../../../../domain/post";

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
