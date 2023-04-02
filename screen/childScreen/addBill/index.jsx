import { View, Text, Image, TextInput,Alert} from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../../../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const AddBill = () => {
  const avatar = require("../../../assets/avatar.png");
  const [amount, setAmount] = useState("");
  const handleAdd=()=>{
    Alert.alert('Thêm mới','Bạn có chắc chắn muốn thêm mới khoản chi ?',[
      {text:'Hủy bỏ',style:'cancle'},
      {text:'Đồng ý',onPress:()=>{console.log(12);}}
    ])
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
        <Text style={styles.title_text}>Thêm khoản chi</Text>
      </View>
      <View style={styles.inputgroup}>
        <TextInput multiline placeholder="Khoản chi" style={styles.input} />
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
          <Text style={styles.btn_add_text}>Thêm mới</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AddBill;
