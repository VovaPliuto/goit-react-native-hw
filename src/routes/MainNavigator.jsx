import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import BottomNavigator from "./BottomNavigator";
import CommentsScreen from "../Screens/CommentsScreen";

import HeaderBackBtn from "../components/HeaderBackBtn";
import MapScreen from "../Screens/MapScreen";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={BottomNavigator} />
      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#0000004D" },
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
        }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#0000004D" },
          headerTitle: "Карта",
          headerTitleAlign: "center",
        }}
      />
    </MainStack.Navigator>
  );
}
