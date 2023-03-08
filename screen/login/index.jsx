// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { ImageBackground } from "react-native";
// import styles from "./styles";
// import { TextInput } from "react-native";
// import { Button,Image} from "react-native";
// import { TouchableOpacity } from "react-native";
// // import styles from "./styles";
// const LoginScreen = () => {
//   const bg = require('../../assets/bg.jpg');
//   const logo = require('../../assets/logo.png')
//   return (
//     <View style={styles.container}>
//       <ImageBackground style={styles.background}  source={bg} />
//       <Image style={styles.logo} source={logo}/>
//       <View style={styles.inputgroup}>
//         <TextInput placeholder="Tài khoản" style={styles.input}/>
//       </View>
//       <View style={styles.inputgroup}>
//         <TextInput secureTextEntry={true}  placeholder="Mật khẩu" style={styles.input}/>
//       </View>
//       <View  style={styles.btnLogin} >
//         <TouchableOpacity>
//         <Text style={styles.loginText} >Đăng nhập</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;
import React, { Component, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LoginRequest } from "../../services/userService";
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
      (res) => {},
      (err) => {}
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={bg} />
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
      <View style={styles.btnLogin}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
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
