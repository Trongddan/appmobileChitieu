import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../../../components/card";
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
    </View>
  );
};

export default UserPage;
