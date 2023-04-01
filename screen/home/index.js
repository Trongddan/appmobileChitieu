import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import styles from "./styles";
import LoginScreen from "../login";
import RegisterScreen from "../register";
import HomeTab from "../childScreen/home";


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
        tabBarStyle: { height: 50},
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
          tabBarIcon: () =>
            isActive === 0 ? (
              <Image style={styles.icon} source={homeActIcon} />
            ) : (
              <Image style={styles.icon} source={homeIcon} />
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
          tabBarIcon: () =>
          isActive === 1 ? (
            <Image style={styles.icon} source={historyAct} />
          ) : (
            <Image style={styles.icon} source={history} />
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
              <Image source={addIcon} />
            </LinearGradient>
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
        component={RegisterScreen}
        options={{ tabBarIcon: () =>
          isActive === 3 ? (
            <Image style={styles.icon} source={userIconAct} />
          ) : (
            <Image style={styles.icon} source={userIcon} />
          ), }}
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
          tabBarIcon: () =>
          isActive === 4 ? (
            <Image style={styles.icon} source={notificationAct} />
          ) : (
            <Image style={styles.icon} source={notification} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
