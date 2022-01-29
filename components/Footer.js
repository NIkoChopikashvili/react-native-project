import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import axios from "axios";

const Footer = ({ email, name, password }) => {
  return (
    <View style={styles.registerBtnView}>
      <TouchableHighlight
        style={styles.registerButton}
        onPress={async () => {
          const response = await axios.post("localhost:5000/api/register", {
            name,
            password,
            email,
          });

          if (response.data.message === "success") {
            alert("Account Created Succesfuly");
            console.log("Account Created Succesfuly");
          }
        }}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    marginTop: 60,
    backgroundColor: "purple",
    width: 400,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
  registerButtonText: {
    color: "white",
  },
  registerBtnView: {
    alignItems: "center",
  },
});

export default Footer;
