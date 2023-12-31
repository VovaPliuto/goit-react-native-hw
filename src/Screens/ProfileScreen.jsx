import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HeaderLogoutBtn from "../components/HeaderLogoutBtn";
import Post from "../components/Post";
import { postsData } from "../data/data.jsx";

export default function ProfileScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-187}
      > */}
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.bgc}
      >
        <View style={styles.authBlock}>
          <View style={styles.photoDiv}>
            <Image
              style={styles.avatar}
              source={require("../public/images/user_big_img.png")}
              resizeMode="stretch"
            />
            <Ionicons
              name="close-circle"
              size={25}
              color="#E8E8E8"
              style={styles.addBtn}
            />
          </View>
          <View style={styles.logoutBtn}>
            <HeaderLogoutBtn />
          </View>
          <Text style={styles.title}>Natali Romanova</Text>
          <FlatList
            style={styles.flatList}
            data={postsData}
            renderItem={({ item }) => (
              <Post
                image={item.image}
                title={item.title}
                comments={item.comments.length}
                locationName={item.locationName}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 34 }}></View>}
            ListFooterComponent={() => <View style={{ height: 190 }}></View>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
      {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bgc: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  authBlock: {
    position: "relative",
    top: 147,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 180,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  title: {
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginBottom: 33,
  },
});
