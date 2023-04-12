import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage;
export const storage = {
  setUser: (accessToken, username, userId) => {
       AsyncStorage.setItem("accessToken", accessToken);
       AsyncStorage.setItem("userName", username);
       AsyncStorage.setItem("userId", userId);
  },

  getUserName:  () => {
      const username =  AsyncStorage.getItem("userName");
      return username
  },
  getAccessToken: () => {
    
      const token =  AsyncStorage.getItem("accessToken");
      if (token != null) {
        return token;
      }
  },
  getUserID: async () => {
    try {
      const id = await AsyncStorage.getItem("userId");
      if (id != null) {
        return {id};
      }
    } catch (error) {
      return null;
    }
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
