import { Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import BillItem from "../../../components/billItem/index";
import CardItem from "../../../components/card";
import { storage } from "../../../storage/storage";

const HomeTab = () => {
  const avatar = require("../../../assets/avatar.png");
  const wifiIcon = require("../../../assets/wifiIcon.png");
  
  const username = storage.getUserName()
  console.log(username);
  return (
    <View style={styles.home_container}>
      <View style={styles.user_intro}>
        <View style={styles.user_intro_name}>
          <Text style={styles.user_intro_name_text}>Hello,</Text>
          <Text style={styles.user_intro_name_textName}> "Danken"</Text>
        </View>
        <View style={styles.user_intro_avatar}>
          <Image style={styles.user_intro_avatar_img} source={avatar} />
        </View>
      </View>
      <CardItem />
      <View style={styles.title_container}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.title_see_all}>See all</Text>
      </View>
      <ScrollView style={styles.ListBillItem}>
        <BillItem />
        <BillItem />
        <BillItem />
        <BillItem />
      </ScrollView>
    </View>
  );
};

export default HomeTab;
