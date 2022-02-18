import { View, Text, StyleSheet } from "react-native";

const Post = ({ body }) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View>
        <Text style={styles.title}>{body.item.title}</Text>
      </View>
      <Text style={{ marginTop: 10 }}>{body.item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  divider: {
    height: 1,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "purple",
  },
});

export default Post;
