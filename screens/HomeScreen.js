import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import useFetch from "../customHooks/useFetch";

function HomeScreen() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="purple" />
      ) : (
        <ScrollView>
          {data.map((body) => {
            return <Text key={body.body}>{body.body}</Text>;
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight() + 20,
  },
});
