import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Footer from "../components/Footer";

const RegisterScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Header authBtn="Login" authText="Register" navigation={navigation} />
      <Inputs
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
      />
      <Footer
        email={email}
        password={password}
        name={name}
        navigation={navigation}
        btnText="Register"
      />
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
});

export default RegisterScreen;
