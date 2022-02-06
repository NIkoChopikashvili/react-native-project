import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import axios from "axios";
import react, { useState } from "react";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Footer = ({ email, name, password, navigation }) => {
  const [scale] = useState(new Animated.Value(1));

  return (
    <View style={styles.registerBtnView}>
      <AnimatedTouchable
        activeOpacity={1}
        style={{
          marginTop: 60,
          backgroundColor: "purple",
          width: 400,
          height: 70,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 200,
          transform: [{ scale }],
        }}
        onPressOut={() => {
          Animated.timing(scale, {
            duration: 300,
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
        onPressIn={async () => {
          Animated.timing(scale, {
            duration: 200,
            toValue: 0.85,
            useNativeDriver: true,
          }).start();
          if (name === "") {
            Alert.alert("name is required");
          } else if (!email.includes("@") || !email.includes(".com")) {
            Alert.alert("email is invalid");
          } else if (password === "") {
            Alert.alert("password is required");
          }
          // const response = await axios.post(
          //   "http://localhost:5000/api/register",
          //   {
          //     name,
          //     password,
          //     email,
          //   }
          // );

          // if (response.data.message === "success") {
          //   alert("Account Created Succesfuly");
          //   console.log("Account Created Succesfuly");
          // }
        }}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </AnimatedTouchable>
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
    // transform: [{ scale }],
  },
  registerButtonText: {
    color: "white",
  },
  registerBtnView: {
    alignItems: "center",
  },
});

export default Footer;
