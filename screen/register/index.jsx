import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterRequest } from "../../services/userService";
import { Toast } from "toastify-react-native";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const logo = require("../../assets/logo.png");
  const handleRegister = () => {
    const params = { username: username, password: password };
    RegisterRequest(
      params,
      (res) => {
        Toast.success("Đăng Ký thành công");
        navigation.navigate("Login");
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
          onChangeText={(e) => setUsername(e)}
          value={username}
          placeholder="Tài khoản"
          style={styles.input}
        />
      </View>
      <View style={styles.inputgroup}>
        <TextInput
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          value={password}
          placeholder="Mật khẩu"
          style={styles.input}
        />
      </View>
      <View style={[styles.inputgroup]}>
        <TextInput
          onChangeText={(e) => setConfirmPass(e)}
          value={confirmPass}
          secureTextEntry={true}
          placeholder="Nhập lại mật khẩu"
          style={styles.input}
        />
      </View>
      {(password !== confirmPass && confirmPass.length) > 0 ? (
        <>
          <Text style={styles.warning_text}>Mật khẩu không khớp</Text>
          <Text style={styles.warning_text}>Vui lòng thử lại</Text>
        </>
      ) : (
        ""
      )}
      <View style={styles.btnLogin}>
        <TouchableOpacity onPress={handleRegister}>
          <LinearGradient
            style={styles.btnLogin}
            colors={["#ef32d9", "#89fffd"]}
          >
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
