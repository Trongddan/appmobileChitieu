import { View, Text, Image, TextInput,Alert} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../../../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const AddCoin = () => {
  const avatar = require("../../../assets/avatar.png");
  const navigation= useNavigation();
  const [amount, setAmount] = useState("");
  const handleAdd=()=>{
    Alert.alert('Cập nhật kinh phí','Bạn có chắc chắn muốn thêm kinh phí ?',[
      {text:'Hủy bỏ',style:'cancle'},
      {text:'Đồng ý',onPress:()=>{console.log(12);}}
    ])
  }
const handleBack=()=>{
    navigation.goBack()
}
  const handleAmountChange = (text) => {
    // Xóa tất cả các ký tự không phải số và chuyển sang số nguyên
    if (text) {
      const value = parseInt(text.replace(/[^0-9]/g, ""));
      // Định dạng giá trị có dấu phẩy ngăn cách hàng nghìn
      const formattedValue = value.toLocaleString();
      setAmount(formattedValue);
    } else {
      setAmount("");
    }
  };

  return (
    <View style={styles.AddBill}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Thêm Khoản tiền</Text>
      </View>
      <View style={styles.inputgroup}>
        <TextInput
          multiline
          placeholder="Số tiền"
          keyboardType="numeric"
          value={amount.length > 0 ? amount.toString() : 0}
          onChangeText={handleAmountChange}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleAdd} >
        <LinearGradient colors={["#ef32d9", "#89fffd"]} style={styles.btn_add}>
          <Text style={styles.btn_add_text}>Cập nhật</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBack} >
        <LinearGradient colors={["#ef32d9", "#89fffd"]} style={styles.btn_add}>
          <Text style={styles.btn_add_text}>Trở về</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AddCoin;
