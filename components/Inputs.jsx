import { View, StyleSheet } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { useState } from "react";

export default function Inputs({
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
}) {
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFoucs, setNameFocus] = useState(false);

  const emailErrors = () => {
    if (emailFocus === true) {
      if (!email.includes("@") || !email.includes(".com")) {
        return true;
      }
    }
    return false;
  };

  const passwordErrors = () => {
    if (passwordFocus === true) {
      if (password === "") {
        return true;
      }
    }
    return false;
  };

  const nameErrors = () => {
    if (nameFoucs === true) {
      if (name === "") {
        return true;
      }
    }
    return false;
  };

  return (
    <View style={styles.inputsParent}>
      <TextInput
        style={styles.nameInput}
        vaule={name}
        onChangeText={setName}
        placeholder="Name"
        onFocus={() => setNameFocus(true)}
      />
      <HelperText type="error" visible={nameErrors()}>
        Name should not be empty!
      </HelperText>
      <TextInput
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        onFocus={() => setEmailFocus(true)}
      />
      <HelperText type="error" visible={emailErrors()}>
        Email address is invalid!
      </HelperText>
      <TextInput
        secureTextEntry={true}
        style={styles.passwordInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        onFocus={() => setPasswordFocus(true)}
      />
      <HelperText type="error" visible={passwordErrors()}>
        Password should not be empty
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  inputsParent: {
    paddingTop: 40,
  },
  passwordInput: {
    marginTop: 30,
  },
  emailInput: {
    marginTop: 30,
  },
});
