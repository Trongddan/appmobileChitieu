import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  user_page: {
    backgroundColor: "#000040",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  user_page_item: {
    height: 70,
    flexDirection: "row",
    backgroundColor: "#20204D",
    marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  user_page_avt: {
    marginRight: 12,
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  user_page_name: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  change_user: {
    fontSize: 20,
    color: "#ffffff",
    position: "absolute",
    right: 20,
  },
  listAction:{
    
  },
  actionItem:{
    height:60,
    backgroundColor:'#20204D',
    // shadowOffset:{width:15,height:15},
    // shadowColor:'gray',
    // shadowRadius:10,
    // shadowOpacity:1,
    borderRadius:20,
    marginVertical:5,
    alignItems:'center',
    justifyContent:'center',
    // elevation:5
  },
  actionItem_text:{
    color:"#ffffff",
    fontSize:18,
    fontWeight:'600',
  
  }
});
export default styles;
