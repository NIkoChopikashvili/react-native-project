import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ReturnRegisterScreen = ({ navigation }) => {
  return <RegisterScreen navigation={navigation} />;
};

const ReturnLoginScreen = () => {
  return <LoginScreen />;
};

const ReturnHomeScreen = () => {
  return <HomeScreen />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={ReturnRegisterScreen} />
        <Stack.Screen name="Login" component={ReturnLoginScreen} />
        <Stack.Screen name="Home" component={ReturnHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
