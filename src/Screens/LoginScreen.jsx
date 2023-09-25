import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.bgc}
      >
        <View style={styles.authBlock}>
          <Text style={styles.authHeader}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.authInput}
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordInputWrap}>
              <TextInput style={styles.authInput} placeholder="Пароль" />
              <TouchableOpacity style={styles.showPassBtn}>
                <Text style={styles.showPassBtnText}>Показати</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.authBtn}>
                <Text style={styles.authBtnText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={[styles.textBelowBtn, styles.showPassBtnText]}>
                Немає аккаунту? <Text style={ styles.textUnderline}>Зареєструватися</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    width: "100%",
    height: 489,
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
    marginTop: 32,
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
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
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