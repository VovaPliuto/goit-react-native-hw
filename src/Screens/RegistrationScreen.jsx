import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

export default function RegistrationScreen() {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isFocusedLoginInput, setIsFocusedLoginInput] = useState(false);
  const [isFocusedEmailInput, setIsFocusedEmailInput] = useState(false);
  const [isFocusedPasswordInput, setIsFocusedPasswordInput] = useState(false);

  const onRegisterSubmit = () => {
    console.log("Login:", `${login}`);
    console.log("Email:", `${email}`);
    console.log("Password:", `${password}`);

    setLogin("");
    setEmail("");
    setPassword("");

    navigation.navigate("Home");
  };

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-187}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/background.png")}
            resizeMode="cover"
            style={styles.bgc}
          >
            <View style={styles.authBlock}>
              <View style={styles.photoDiv}>
                <AntDesign
                  name="pluscircleo"
                  size={25}
                  color="#FF6C00"
                  style={styles.addBtn}
                />
              </View>
              <Text style={styles.authHeader}>Реєстрація</Text>
              <View style={styles.form}>
                <TextInput
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => setIsFocusedLoginInput(true)}
                  onBlur={() => setIsFocusedLoginInput(false)}
                  style={[
                    [
                      styles.authInput,
                      isFocusedLoginInput && styles.authInputFocused,
                    ],
                  ]}
                  autoCapitalize="none"
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                />

                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setIsFocusedEmailInput(true)}
                  onBlur={() => setIsFocusedEmailInput(false)}
                  style={[
                    [
                      styles.authInput,
                      isFocusedEmailInput && styles.authInputFocused,
                    ],
                  ]}
                  autoCapitalize="none"
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                />
                <View style={styles.passwordInputWrap}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setIsFocusedPasswordInput(true)}
                    onBlur={() => setIsFocusedPasswordInput(false)}
                    style={[
                      [
                        styles.authInput,
                        isFocusedPasswordInput && styles.authInputFocused,
                      ],
                    ]}
                    autoCapitalize="none"
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity style={styles.showPassBtn}>
                    <Text
                      onPress={showPasswordToggle}
                      style={styles.showPassBtnText}
                    >
                      {!showPassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={onRegisterSubmit}
                  style={styles.authBtn}
                >
                  <Text style={styles.authBtnText}>Зареєструватися</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity> */}
                  <Text style={[styles.showPassBtnText, styles.signinBtnText]}>
                    Вже є аккаунт?{" "}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                      style={[styles.textUnderline, styles.showPassBtnText]}
                    >
                      Увійти
                    </Text>
                  </Text>
                {/* </TouchableOpacity> */}
              </View>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "tomato",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
  },
  bgc: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  photoDiv: {
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 16,
    zIndex: 1,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  authBlock: {
    position: "absolute",
    bottom: 0,
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  authHeader: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  form: {
    flex: 1,
    gap: 16,
    marginTop: 33,
  },
  authInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  authInputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
    color: "#212121",
  },
  passwordInputWrap: {
    position: "relative",
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 14,
    fontSize: 16,
  },
  showPassBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  authBtn: {
    display: "flex",
    justifyContent: "center",
    marginTop: 43,
    borderRadius: 100,
    height: 51,
    backgroundColor: "#FF6C00",
  },
  authBtnText: {
    borderRadius: 100,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  signinBtn: {
    marginTop: 16,
  },
  signinBtnText: {
    textAlign: "center",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
});
