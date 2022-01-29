import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import axios from "axios";

const Footer = ({ email, name, password }) => {
  return (
    <View style={styles.registerBtnView}>
      <TouchableHighlight
        style={styles.registerButton}
        onPress={async () => {
          console.log(email, name, password);
          if (name === "") {
            Alert.alert("name is required");
          } else if (email === "") {
            Alert.alert("email is required");
          } else if (password === "") {
            Alert.alert("password is required");
          }
          const response = await axios.post("localhost:5000/api/register", {
            name,
            password,
            email,
          });
          console.log(response);

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
