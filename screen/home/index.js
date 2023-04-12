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
import AddBill from "../childScreen/addBill";
import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
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
            <TouchableOpacity >
            <FontAwesome
              style={
                isActive === 0
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="home"
            />
            </TouchableOpacity>
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
            <TouchableOpacity >
            <FontAwesome
              style={
                isActive === 1
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="history"
            />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Add bill"
        component={AddBill}
        listeners={{
          tabPress: () => {
            setIsActive(2);
          },
        }}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity >
            <LinearGradient
              colors={["#ef32d9", "#89fffd"]}
              style={styles.addIcon}
            >
              <FontAwesome
                style={{ color: "white", fontSize: 25 }}
                name="plus"
              />
            </LinearGradient>
            </TouchableOpacity>
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
            <TouchableOpacity >
            <FontAwesome
              style={
                isActive === 4
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="bell"
            />
            </TouchableOpacity>
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
            <TouchableOpacity >
            <FontAwesome
              style={
                isActive === 3
                  ? { color: "white", fontSize: 25 }
                  : { color: "#9491AE", fontSize: 25 }
              }
              name="user"
            />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
