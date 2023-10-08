import { Text, View, Image, StyleSheet } from "react-native";
export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrap}>
        <Image
          style={styles.avatar}
          source={require("../public/images/User.png")}
        />
        <View>
          <Text style={styles.nameText}>Natali Romanova</Text>
          <Text style={styles.emailText}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  nameText: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 13,
  },
  emailText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 11,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});
