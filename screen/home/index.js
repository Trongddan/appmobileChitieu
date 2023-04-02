import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import styles from "./styles";
import LoginScreen from "../login";
import RegisterScreen from "../register";
import HomeTab from "../childScreen/home";
import UserPage from "../childScreen/user";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const homeIcon = require("../../assets/home.png");
  const homeActIcon = require("../../assets/homeAct.png");
  const userIcon = require("../../assets/user.png");
  const userIconAct = require("../../assets/userAct.png");
  const notification = require("../../assets/notification.png");
  const notificationAct = require("../../assets/notificationAct.png");
  const history = require("../../assets/history.png");
  const historyAct = require("../../assets/historyAct.png");
  const addIcon = require("../../assets/addIcon.png");
  const [isActive, setIsActive] = useState(0);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { color: "blue", fontSize: 15, marginVertical: 12 },
        tabBarStyle: { height: 50, backgroundColor: "#20204D" },
        tabBarShowLabel: false,
        headerStyle: {
          height: 1,
        },
      }}
    >
      <Tab.Screen
        name=" screen"
        component={HomeTab}
        listeners={{
          tabPress: () => {
            setIsActive(0);
          },
        }}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              style={
                isActive === 0
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="home"
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="History"
        component={LoginScreen}
        listeners={{
          tabPress: () => {
            setIsActive(1);
          },
        }}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              style={
                isActive === 1
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="history"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add bill"
        component={LoginScreen}
        listeners={{
          tabPress: () => {
            setIsActive(2);
          },
        }}
        options={{
          tabBarIcon: () => (
            <LinearGradient
              colors={["#ef32d9", "#89fffd"]}
              style={styles.addIcon}
            >
              <FontAwesome
                style={{ color: "white", fontSize: 25 }}
                name="plus"
              />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: () => {
            setIsActive(4);
          },
        }}
        name="Notification"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              style={
                isActive === 4
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="bell"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        listeners={{
          tabPress: () => {
            setIsActive(3);
          },
        }}
        component={UserPage}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              style={
                isActive === 3
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="user"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
