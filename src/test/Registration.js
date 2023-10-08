import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button title="Go to login" onPress={() => navigation.navigate("Login", {sessionId: 45, userId: "22e24"})}></Button>
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

export default Registration;
