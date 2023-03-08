import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleApp: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    TextColor: "#fff",
    marginBottom: 12,
  },
  titleContent: {
    flex: 2,
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    flex: 1,
    height: 100,
    zIndex: 1,
    transform: [{ rotate: "-20deg" }],
  },
  inputgroup: {
    width: "75%",
    zIndex: 1,
    marginBottom: 25,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 20,
  },
  btnLogin: {
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "red",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 500,
  },
  extendContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 50,
  },
  extendContainerText: {
    color: "#fff",
    fontSize:16
  },
});
export default styles;
