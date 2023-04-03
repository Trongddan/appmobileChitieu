import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const bg = require("../../assets/bg.jpg");
  const logo = require("../../assets/logo.png");
  return (
    <View style={styles.container}>
      <View style={styles.titleApp}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.titleContent}>DANKEN</Text>
      </View>
      <View style={styles.inputgroup}>
        <TextInput placeholder="Tài khoản" style={styles.input} />
      </View>
      <View style={styles.inputgroup}>
        <TextInput
          secureTextEntry={true}
          placeholder="Mật khẩu"
          style={styles.input}
        />
      </View>
      <View style={styles.inputgroup}>
        <TextInput
          secureTextEntry={true}
          placeholder="Nhập lại mật khẩu"
          style={styles.input}
        />
      </View>
      <View style={styles.btnLogin}>
        <TouchableOpacity>
        <LinearGradient style={styles.btnLogin} colors={["#ef32d9", "#89fffd"]}>
          <View>
            <Text style={styles.loginText}>Đăng ký</Text>
          </View>
        </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.extendContainer}>
        <Text style={styles.extendContainerText}>Quên mật khẩu</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.extendContainerText}>Trở về</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
