import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Post({ image, title, comments, locationName }) {
  return (
    <View style={styles.postFrame}>
      <Image style={styles.img} source={image} />
      <Text>{title}</Text>
      <View style={styles.bottomPostWrap}>
        <View style={styles.commentsWrap}>
          <Feather name="message-circle" size={24} color={"#BDBDBD"} />
          <Text style={{ color: "#BDBDBD" }}>{comments}</Text>
        </View>
        <View style={styles.locationWrap}>
          <Feather name="map-pin" size={24} color={"#BDBDBD"} />
          <Text>{locationName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postFrame: {
    display: "flex",
    gap: 8,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  commentsWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  bottomPostWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
