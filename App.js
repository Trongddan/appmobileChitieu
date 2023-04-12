import { StyleSheet } from "react-native";
import Container from "toastify-react-native";
import AppNavigator from "./config/appNavigator";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { storage } from "./storage/storage";
import { useEffect } from "react";

// import { useNavigation} from "@react-navigation/native";
export default function App({ navigation }) {
  // const navigation = useNavigation();
  useEffect(() => {
    storage.getAccessToken().then((res) => {
      if (res.length > 0) {
        navigation.navigate("Home");
      }
    });
  }, []);
  return (
    <>
    
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Container   position="top" />

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
