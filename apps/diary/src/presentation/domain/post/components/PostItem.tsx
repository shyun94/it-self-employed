import { Button, Text, View } from "react-native";
import { Post } from "../../../../domain/post";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigation } from "../../../../navigation/AppNavigation";

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  const navigation = useNavigation<RootStackNavigation>();
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
      <Text>asdf</Text>
      <Button
        title="수정"
        onPress={() =>
          navigation.navigate("Edit", {
            post,
          })
        }
      />
    </View>
  );
}
