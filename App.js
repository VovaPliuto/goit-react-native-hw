import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen></LoginScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
