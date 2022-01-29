import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Inputs({
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
}) {
  return (
    <View style={styles.inputsParent}>
      <TextInput
        style={styles.nameInput}
        vaule={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.passwordInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
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
