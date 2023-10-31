import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import BottomNavigator from "./BottomNavigator";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Registration"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
      ></MainStack.Screen>
      <MainStack.Screen name="Login" component={LoginScreen}></MainStack.Screen>
      <MainStack.Screen name="Home" component={BottomNavigator}></MainStack.Screen>
    </MainStack.Navigator>
  );
}
