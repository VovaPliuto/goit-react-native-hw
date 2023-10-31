import { View, Text, Image, StyleSheet } from "react-native";

export default function ListHeader() {
  return (
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
  );
}

const styles = StyleSheet.create({
  profileWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
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
