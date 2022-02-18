import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import useFetch from "../customHooks/useFetch";
import Post from "../components/Post";

function HomeScreen() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="purple" />
      ) : (
        <FlatList
          keyExtractor={(body) => body.id}
          data={data}
          renderItem={(body) => <Post body={body} />}
        />
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
