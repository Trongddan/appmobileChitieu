import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage;
export const storage = {
  setUser: async (accessToken, username) => {
    try {
      await AsyncStorage.setItem("accessToken", accessToken);
      await AsyncStorage.setItem("userName", username);
    } catch (error) {
      console.log("lưu trữ dữ liệu bị lỗi");
    }
  },

  getUserName: async () => {
    try {
      const username = await AsyncStorage.getItem("userName");
      if (username !== null) {
        // Dữ liệu tồn tại trong AsyncStorage
        return { username};
      }
    } catch (error) {
      return null;
    }
  },
  getAccessToken: async()=>{
    try {
        const token = await AsyncStorage.getItem("accessToken");
        if(token!=null){
            return token
        }
    } catch (error) {
        return null
    }
  }
};
