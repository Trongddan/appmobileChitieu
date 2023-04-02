import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
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
    flexDirection: "row",
  },
  detail_coin: {
    height: "100%",
    width: "70%",
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  detail_coin_total: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "900",
  },
  detail_coin_date: {
    color: "#ffffff",
  },
  wifiIcon: {
    position: "absolute",
    right: 30,
    top: "50%",
    transform: [{ translateY: -20 }],
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
export default styles;
