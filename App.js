import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import MainNavigator from "./src/routes/MainNavigator";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/routes/BottomNavigator";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
      {/* <MainStack.Navigator
        initialRouteName="Registration"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
