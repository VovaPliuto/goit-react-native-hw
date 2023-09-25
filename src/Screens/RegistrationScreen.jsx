import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.bgc}
      >
        <View style={styles.authBlock}>
          <View style={styles.photoDiv}>
            {/* <View style={styles.addBtn}></View> */}
            <Image
              style={styles.addBtn}
              source={require("../assets/add.png")}
            />
          </View>
          <Text style={styles.authHeader}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput style={styles.authInput} placeholder="Логін" />
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
                <Text style={styles.authBtnText}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signinBtn}>
                <Text style={[styles.showPassBtnText, styles.signinBtnText]}>
                  Вже є аккаунт?{" "}
                  <Text style={styles.textUnderline}>Увійти</Text>
                </Text>
              </TouchableOpacity>
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
    left: "50%",
    transform: "translateX(-44px)",
    height: 120,
    width: 120,
    borderRadius: 16,
    zIndex: 1,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    // width: 25,
    // height: 25,
    // backgroundColor: "#ffffff",
    // borderColor: "#FF6C00",
    // borderWidth: 1,
    // borderRadius: 25 / 2,
  },
  authBlock: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    width: "100%",
    height: 549,
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
    // lineHeight: "normal",
    letterSpacing: 0.3,
    marginTop: 92,
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
