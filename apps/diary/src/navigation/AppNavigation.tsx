import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EditScreen from "../screens/EditScreen";
import { Post } from "../domain/post";

type RootStackList = {
  Home: undefined;
  Edit: { post: Post };
};

export interface RootStackNavigation extends NavigationProp<RootStackList> {}

interface RootStackRoute extends RouteProp<RootStackList> {}

const Stack = createNativeStackNavigator<RootStackList>();

export interface DiaryScreenProps {
  navigation: RootStackNavigation;
  route: RootStackRoute;
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={({ route }) => ({
            title: route.params.post.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
