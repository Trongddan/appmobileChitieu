

import { StyleSheet } from "react-native";
import Container from "toastify-react-native"
import AppNavigator from "./config/appNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { storage } from "./storage/storage";
import { useEffect } from "react";

export default function App({navigation}) {
  const getToken = async()=>{
    const token = await storage.getAccessToken();
    if(token!=null){
      navigation.navigate('Home')
    }
  }
  useEffect(()=>{
    getToken()
  },[])
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