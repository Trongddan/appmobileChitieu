import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#000040",
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
    width: "85%",
    zIndex: 1,
    marginBottom: 25,
  },
  input: {
    backgroundColor: "white",
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
    textShadowOffset: { width: 5, height: 3 },
    textShadowRadius: 20,
  },
  btnLogin: {
    marginTop: 50,
    marginVertical: 10,
    borderRadius: 10,
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 25,
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
    fontSize: 16,
  },
  warning_text: {
    color: "yellow",
    fontSize: 15,
  },
});
export default styles;
