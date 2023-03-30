

import { StyleSheet } from "react-native";
import Container from "toastify-react-native"
import AppNavigator from "./config/appNavigator";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    <Container position="top" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});