import { Text, View } from "react-native";
import { ScreenProps } from "react-native-screens";

interface Props extends ScreenProps {}

export default function EditScreen({}: Props) {
  return (
    <View>
      <Text>편집 스크린</Text>
    </View>
  );
}
