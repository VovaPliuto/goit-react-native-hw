import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const { params: { userId } } = useRoute();

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text>User ID: {userId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
