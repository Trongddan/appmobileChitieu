import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  home_container: {
    backgroundColor: "#000040",
    flex: 1,
    flexDirection: "column",
  },
  user_intro: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    with: "100%",
    height: 70,
  },
  user_intro_name: {
    // height: "100%",
  },
  user_intro_name_text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  user_intro_name_textName: {
    color: "#ffffff",
    fontSize: 15,
  },
  user_intro_avatar: {},
  user_intro_avatar_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  card_coin_container: {
    height: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card_coin_item: {
    height: 230,
    width: 360,
    borderRadius: 23,
    backgroundColor: "blue",
    flexDirection:'row'
  },
  detail_coin: {
    height: "100%",
    width: "70%",
    padding:20,
    flexDirection:'column',
    justifyContent:'space-around'
  },
  detail_coin_total: {
    color: "#ffffff",
    fontSize:30,
    fontWeight:"900",

  },
  detail_coin_date: {
    color: "#ffffff",
  },
  wifiIcon:{
    position:'absolute',
    right:30,
    top:"50%",
    transform:[{translateY:-20}],
    width:30,
    height:30,
    resizeMode:"contain"
  },
  title:{
    color:'#ffffff',
    fontSize:25,
    fontWeight:'bold',
    paddingHorizontal:20
  },
  item_bill:{
    height:60,
    backgroundColor:'red',
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:20
  },
  item_bill_number:{
    width:40,
    height:40,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
  },
  item_bill_numberText:{
    color:"#ffffff",
    fontSize:15,
    fontWeight:'600'
  },
  item_bill_content:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    width:'90%'
  }
});
export default styles;
