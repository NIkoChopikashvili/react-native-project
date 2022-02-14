import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ authBtn, authText, navigation }) {
  return (
    <View style={styles.pageHeader}>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation);
          navigation.push("Register");
        }}
      >
        <Text style={styles.XParent}>X</Text>
      </TouchableOpacity>
      <Text style={styles.pageHeaderText}>{authText}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation);
          navigation.push("Login");
        }}
      >
        <Text style={styles.loginText}>{authBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pageHeaderText: {
    fontWeight: "normal",
    fontSize: 30,
    marginLeft: 50,
  },
  XParent: {
    marginTop: 10,
    marginLeft: 10,
  },
  loginText: {
    fontSize: 20,
    color: "purple",
    marginRight: 15,
  },
});
