import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import BillItem from "../../../components/billItem/index";
import CardItem from "../../../components/card";
import { storage } from "../../../storage/storage";
import useExp from "../../../hook/useExp";
import { FontAwesome } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const HomeTab = () => {
  const isfocus = useIsFocused();
  const avatar = require("../../../assets/avatar.png");
  const [username, setUsename] = useState("");
  const { listExp, getallExp } = useExp();
  useEffect(() => {
    storage.getUserName().then((res) => {
      setUsename(res);
    });
    storage.getUserID().then((res) => {
      getallExp(res);
    });
  }, [isfocus]);

  return (
    <View style={styles.home_container}>
      <View style={styles.user_intro}>
        <View style={styles.user_intro_name}>
          <Text style={styles.user_intro_name_text}>Hello,</Text>
          <Text style={styles.user_intro_name_textName}>{username}</Text>
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
      {listExp?.length > 0 ? (
        <ScrollView style={styles.ListBillItem}>
          {listExp.map((item, index) => (
            <BillItem item={item} index={index} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noBill}>
          <Text style={styles.noBill_Text}>Không có khoản chi nào ! </Text>
        </View>
      )}
    </View>
  );
};

export default HomeTab;
