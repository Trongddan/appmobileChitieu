import { View, Text, Image, TextInput, Alert,TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import { Toast } from "toastify-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { addExp } from "../../../services/expService";
import { storage } from "../../../storage/storage";
import { updateCoin } from "../../../services/userService";

const AddBill = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState();
  const [name, setName] = useState("");
  const UpdateCoin = (coin) => {
    storage.getUserID().then((res) => {
      updateCoin(
        {
          id: res,
          coin: coin,
        },
        (res) => {
          Toast.success(res.data.mess);
          navigation.navigate("Home");
        },
        (err) => {
          Toast.error("Thêm thất bại");
          navigation.navigate("Home");
        }
      );
    });
  };
  const handleAdd = () => {
    Alert.alert("Thêm mới", "Bạn có chắc chắn muốn thêm mới khoản chi ?", [
      { text: "Hủy bỏ", style: "cancle" },
      {
        text: "Đồng ý",
        onPress: () => {
          addExp(
            {
              name: name,
              price: price,
            },
            (res) => {
              UpdateCoin(price);
              setName("");
              setPrice();
            },
            (err) => {
              Toast.error("Thêm thất bại");
              navigation.navigate("Home");
            }
          );
        },
      },
    ]);
  };

  const handleAmountChange = (text) => {
    setPrice(text);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.AddBill}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Thêm khoản chi</Text>
      </View>
      <View style={styles.inputgroup}>

        <TextInput
          value={name}

          placeholder="Khoản chi"
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputgroup}>
        <TextInput

          placeholder="Số tiền"
          keyboardType="numeric"
          value={price}
          onChangeText={handleAmountChange}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleAdd}>
        <LinearGradient colors={["#ef32d9", "#89fffd"]} style={styles.btn_add}>
          <Text style={styles.btn_add_text}>Thêm mới</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default AddBill;
