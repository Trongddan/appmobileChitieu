import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage;
export const storage = {
  setUser: (accessToken, username, userId) => {
    AsyncStorage.setItem("accessToken", accessToken);
    AsyncStorage.setItem("userName", username);
    AsyncStorage.setItem("userId", userId);
  },

  getUserName: () => {
    const username = AsyncStorage.getItem("userName");
    return username;
  },
  getAccessToken: () => {
    const token = AsyncStorage.getItem("accessToken");
      return token;
  },
  getUserID: () => {
    const id = AsyncStorage.getItem("userId");

    return id;
  },
  removeUser: async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("userName");
      await AsyncStorage.removeItem("userId");
    } catch (error) {
      console.log(error);
    }
  },
};
