import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  AddBill: {
    backgroundColor: "#000040",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
  marginVertical:40,
  },
  title_text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "600",
  },
  inputgroup: {
    marginVertical: 20,
    width: "85%",
    zIndex: 1,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
    textShadowOffset: { width: 5, height: 3 },
    textShadowRadius: 20,
  },
  btn_add: {
    marginTop:30,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius:23
  },
  btn_add_text: {
    color: "#ffffff",
    fontSize:18,
    fontWeight:'600'
  },
});
export default styles;
