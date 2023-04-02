import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item_bill: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  item_bill_number: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  item_bill_numberText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },
  item_bill_content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "90%",
  },
  item_bill_content_name: {},
  item_bill_content_nameText: {
    color: "#ffffff",
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  item_bill_content_namedate: {
    color: "#B9B2C4",
  },
  item_bill_content_namePrice: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "700",
  },
  item_bill_content_namehours: {
    color: "#B9B2C4",
  },
});
export default styles;
