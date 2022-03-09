import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const passwordErrors = () => {
    if (password === "") {
      return true;
    }
    return false;
  };

  const nameErrors = () => {
    if (name === "") {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Header authBtn="Register" authText="Login" />
      <View style={styles.inputsParent}>
        <TextInput
          style={styles.nameInput}
          vaule={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <HelperText type="error" visible={nameErrors()}>
          Name should not be empty!
        </HelperText>
        <TextInput
          secureTextEntry={true}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <HelperText type="error" visible={passwordErrors()}>
          Password should not be empty
        </HelperText>
        <Footer
          password={password}
          name={name}
          navigation={navigation}
          btnText="Login"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight() + 20,
  },
  inputsParent: {
    paddingTop: 40,
  },
  passwordInput: {
    marginTop: 30,
  },
});

export default LoginScreen;
