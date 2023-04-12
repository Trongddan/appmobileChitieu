import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
const BillItem = ({ item, index }) => {
  return (
    <View style={styles.item_bill}>
      <LinearGradient
        colors={["#ef32d9", "#89fffd"]}
        style={styles.item_bill_number}
      >
        <Text style={styles.item_bill_numberText}>
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </Text>
      </LinearGradient>
      <View style={styles.item_bill_content}>
        <View style={styles.item_bill_content_name}>
          <Text style={styles.item_bill_content_nameText}>{item.name}</Text>
          <Text style={styles.item_bill_content_namedate}>today</Text>
        </View>
        <View style={styles.item_bill_content_name}>
          <Text style={styles.item_bill_content_namePrice}>-60k</Text>
          <Text style={styles.item_bill_content_namehours}>2:00PM</Text>
        </View>
      </View>
    </View>
  );
};

export default BillItem;
