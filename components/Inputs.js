import { View, StyleSheet, Text } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

export default function Inputs({
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
}) {
  const emailErrors = () => {
    return !email.includes("@") || !email.includes(".com");
  };

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
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
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
