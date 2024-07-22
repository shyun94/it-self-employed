import { Text, TextInput, View } from "react-native";
import { DiaryScreenProps } from "../navigation/AppNavigation";

interface Props extends DiaryScreenProps {}

export default function EditScreen({ route }: Props) {
  const post = route.params?.post;

  if (!post)
    return (
      <View>
        <Text>?</Text>
      </View>
    );

  return (
    <View>
      <Text>편집 스크린 {post.id}</Text>
      <Text>{post.title}</Text>
      <TextInput> {post.content}</TextInput>
    </View>
  );
}
