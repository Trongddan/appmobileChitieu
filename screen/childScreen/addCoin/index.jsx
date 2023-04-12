import { View, Text, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Toast } from "toastify-react-native";
import CardItem from "../../../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { addCoin } from "../../../services/userService";

const AddCoin = () => {
  const avatar = require("../../../assets/avatar.png");
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const handleAdd = () => {
    Alert.alert("Cập nhật kinh phí", "Bạn có chắc chắn muốn thêm kinh phí ?", [
      { text: "Hủy bỏ", style: "cancle" },
      {
        text: "Đồng ý",
        onPress: () => {
          addCoin(
            {
              coin: amount,
            },
            (res) => {
              Toast.success(res.data.mess)
            },
            (err) => {
              console.log(err);
              // Toast.success(err.data.mess)
            }
          );
        },
      },
    ]);
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleAmountChange = (text) => {
    setAmount(text)
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
      <TouchableOpacity onPress={handleAdd}>
        <LinearGradient colors={["#ef32d9", "#89fffd"]} style={styles.btn_add}>
          <Text style={styles.btn_add_text}>Cập nhật</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBack}>
        <LinearGradient colors={["#ef32d9", "#89fffd"]} style={styles.btn_add}>
          <Text style={styles.btn_add_text}>Trở về</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AddCoin;
