import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Footer from "./components/Footer";

export default function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Inputs
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
      />
      <Footer email={email} password={password} name={name} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight() + 20,
  },
});