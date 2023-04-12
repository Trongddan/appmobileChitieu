import { View, Text, Image,Alert } from "react-native";
import React,{useEffect,useState} from "react";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../../../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { storage } from "../../../storage/storage";
const UserPage = ({navigation}) => {
  const [username,setUsename]=useState("")
  const avatar = require("../../../assets/avatar.png");
  const getuserName = async()=>{
    const user = await storage.getUserName();
    if(user!=null){
      setUsename(user.username)
    }
  }
  useEffect(()=>{
    getuserName()
  },[])
  const handleAddCoin =()=>{
    navigation.navigate('Add coin')
  }
  const handleRemoveUser = async()=>{
     await storage.removeUser();
  }

  const handleLogOut =()=>{
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn đăng xuất khỏi thiết bị",[
      {text:"cancle",onPress:()=>{}},
      {text:"Ok",onPress:()=>{
        handleRemoveUser()
        navigation.navigate('Login')
      }}
    ])
  }
  return (
    <View style={styles.user_page}>
      <View style={styles.user_page_item}>
        <Image style={styles.user_page_avt} source={avatar} />
        <Text style={styles.user_page_name}>{username}</Text>
        <FontAwesome onPress={handleLogOut} style={styles.change_user} name="recycle" />
      </View>
      <CardItem />
      <View style={styles.listAction}>
      <TouchableOpacity onPress={handleAddCoin} >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Cập nhật coin</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Thông tin tài khoản</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.actionItem}>
          <Text style={styles.actionItem_text}>Đổi mật khẩu</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserPage;
