import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.pageHeader}>
      <TouchableOpacity>
        <Text style={styles.XParent}>X</Text>
      </TouchableOpacity>
      <Text style={styles.pageHeaderText}>Sign Up</Text>
      <TouchableOpacity>
        <Text style={styles.loginText}>Login</Text>
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
