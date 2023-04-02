import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
const CardItem = () => {
  const wifiIcon = require("../../assets/wifiIcon.png");
  return (
    <View style={styles.card_coin_container}>
      <LinearGradient
        start={{ x: 0.3, y: 0.4 }}
        colors={["#4924a3", "#171a42", "#802679"]}
        style={styles.card_coin_item}
      >
        <View style={styles.detail_coin}>
          <Text style={styles.detail_coin_total}>1,925,000đ</Text>
          <Text style={styles.detail_coin_date}>30/04/2023</Text>
        </View>
        <Image style={styles.wifiIcon} source={wifiIcon} />
      </LinearGradient>
    </View>
  );
};

export default CardItem;
