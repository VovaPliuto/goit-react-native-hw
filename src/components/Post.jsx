import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Post({
  image,
  title,
  comments,
  locationName,
  id,
  geolocation,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.postFrame}>
      <Image style={styles.img} source={image} />
      <Text>{title}</Text>
      <View style={styles.bottomPostWrap}>
        <TouchableOpacity
          style={styles.commentsWrap}
          onPress={() => navigation.navigate("Comments", { image, id })}
        >
          <Feather
            name="message-circle"
            size={24}
            color={"#BDBDBD"}
            style={comments?.length && styles.iconActive}
          />
          <Text style={{ color: "#BDBDBD" }}>{comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationWrap}
          onPress={() => navigation.navigate("Map", { title, geolocation })}
        >
          <Feather name="map-pin" size={24} color={"#BDBDBD"} />
          <Text>{locationName}</Text>
        </TouchableOpacity>
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
  iconActive: {
    color: "#FF6C00",
  },
});
