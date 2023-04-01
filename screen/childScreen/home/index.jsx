import { Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
const HomeTab = () => {
  const avatar = require("../../../assets/avatar.png");
  const wifiIcon = require("../../../assets/wifiIcon.png");
  return (
    <View style={styles.home_container}>
      <View style={styles.user_intro}>
        <View style={styles.user_intro_name}>
          <Text style={styles.user_intro_name_text}>Hello,</Text>
          <Text style={styles.user_intro_name_textName}> Danken</Text>
        </View>
        <View style={styles.user_intro_avatar}>
          <Image style={styles.user_intro_avatar_img} source={avatar} />
        </View>
      </View>
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
      <Text style={styles.title}>Today</Text>
      <ScrollView>
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
        <View style={styles.item_bill}>
            <View style={styles.item_bill_number}><Text style={styles.item_bill_numberText}>01</Text></View>
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
      </ScrollView>
    </View>
  );
};

export default HomeTab;
