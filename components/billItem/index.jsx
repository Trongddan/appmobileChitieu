import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
const BillItem = () => {
  return (
    <View style={styles.item_bill}>
      <LinearGradient
        colors={["#ef32d9", "#89fffd"]}
        style={styles.item_bill_number}
      >
        <Text style={styles.item_bill_numberText}>01</Text>
      </LinearGradient>
      <View style={styles.item_bill_content}>
        <View style={styles.item_bill_content_name}>
          <Text style={styles.item_bill_content_nameText}>Thịt gà</Text>
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
