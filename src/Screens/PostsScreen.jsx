import { Text, View, Image, StyleSheet, FlatList } from "react-native";

import Post from "../components/Post";
import ListHeader from "../components/ListHeader";
import { postsData } from "../data/data.jsx";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <ListHeader />
      <FlatList
        style={styles.flatList}
        data={postsData}
        renderItem={({ item }) => (
          <Post
            image={item.image}
            title={item.title}
            comments={item.comments.length}
            locationName={item.locationName}
            id={item.id}
            geolocation={item.geolocation}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 34 }}></View>}
        ListFooterComponent={() => <View style={{ height: 46 }}></View>}
        showsVerticalScrollIndicator={false}
      />
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
});
