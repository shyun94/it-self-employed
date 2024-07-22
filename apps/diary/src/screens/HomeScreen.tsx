import { Button, StyleSheet, Text, View } from "react-native";
import { DiaryScreenProps } from "../navigation/AppNavigation";
import { useGetPosts } from "../presentation/domain/post/hooks/useGetPosts";
import PostItem from "../presentation/domain/post/components/PostItem";

interface Props extends DiaryScreenProps {}

export default function HomeScreen({ navigation }: Props) {
  const { data: posts } = useGetPosts();
  return (
    <View style={styles.container}>
      <Text>홈</Text>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
