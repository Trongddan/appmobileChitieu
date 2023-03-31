import { StyleSheet, Text, View,Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import styles from "./styles";
import LoginScreen from "../login";
import RegisterScreen from "../register";
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  const HomeIcon = require("../../assets/Home.svg");
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { color: "blue", fontSize: 15, marginVertical: 12 },
        tabBarStyle: { height: 60, color: "red" },
        tabBarShowLabel: true,
        //  tabBarShowLabel:true,
        headerStyle: {
          height: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (<Image source={HomeIcon} />),
          title: "Trang chủ",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen name="Settings" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
