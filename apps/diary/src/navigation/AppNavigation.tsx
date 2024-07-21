import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EditScreen from "../screens/EditScreen";

const Stack = createNativeStackNavigator();

interface RootStackList {
  Home: undefined;
  Edit: { postId: string };
}

interface RootStackNavigation extends NavigationProp<RootStackList> {}

export interface ScreenProps {
  navigation: RootStackNavigation;
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
