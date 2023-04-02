import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../../../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
const UserPage = () => {
  const avatar = require("../../../assets/avatar.png");

  return (
    <View style={styles.user_page}>
      <View style={styles.user_page_item}>
        <Image style={styles.user_page_avt} source={avatar} />
        <Text style={styles.user_page_name}>Danken</Text>
        <FontAwesome style={styles.change_user} name="recycle" />
      </View>
      <CardItem />
      <View style={styles.listAction}>
      <TouchableOpacity >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Cập nhật coin</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Thông tin tài khoản</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Đổi mật khẩu</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserPage;
