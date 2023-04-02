import React, { Component, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Toast } from "toastify-react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LoginRequest } from "../../services/userService";
import { LinearGradient } from "expo-linear-gradient";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const bg = require("../../assets/bg.jpg");
  const logo = require("../../assets/logo.png");
  const handleLogin = () => {
    const params = { username: username, password: password };
    LoginRequest(
      params,
      (res) => {
        Toast.success("Đăng nhập thành công");
        navigation.navigate("Home");
      },
      (err) => {
        console.log(err);
        Toast.error("Đăng nhập thất bại");
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleApp}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.titleContent}>DANKEN</Text>
      </View>

      <View style={styles.inputgroup}>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          placeholder="Tài khoản"
          style={styles.input}
        />
      </View>
      <View style={styles.inputgroup}>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          placeholder="Mật khẩu"
          style={styles.input}
        />
      </View>
      <TouchableOpacity  onPress={handleLogin}>
        <LinearGradient style={styles.btnLogin} colors={["#ef32d9", "#89fffd"]}>
          <View>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.extendContainer}>
        <Text style={styles.extendContainerText}>Quên mật khẩu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.extendContainerText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
