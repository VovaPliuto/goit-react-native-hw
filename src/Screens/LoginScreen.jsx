import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isFocusedEmailInput, setIsFocusedEmailInput] = useState(false);
  const [isFocusedPasswordInput, setIsFocusedPasswordInput] = useState(false);

  const onLoginSubmit = () => {
    console.log("Email:", `${email}`);
    console.log("Password:", `${password}`);

     setEmail("");
     setPassword("");
  };

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={-200}
      >
        <ImageBackground
          source={require("../assets/background.png")}
          resizeMode="cover"
          style={styles.bgc}
        >
          <View style={styles.authBlock}>
            <Text style={styles.authHeader}>Увійти</Text>
            <View style={styles.form}>
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
                <TouchableOpacity
                  onPress={onLoginSubmit}
                  style={styles.authBtn}
                >
                  <Text style={styles.authBtnText}>Увійти</Text>
                </TouchableOpacity>
                <Text style={[styles.textBelowBtn, styles.showPassBtnText]}>
                  Немає аккаунту?{" "}
                  <Text style={styles.textUnderline}>Зареєструватися</Text>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgc: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  authBlock: {
    position: "absolute",
    bottom: 0,
    paddingTop: 32,
    paddingBottom: 111,
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
    top: 16,
  },
  showPassBtnText: {
    display: "flex",
    alignItems: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  signupWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
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
  textBelowBtn: {
    marginTop: 16,
    textAlign: "center",
  },
});
