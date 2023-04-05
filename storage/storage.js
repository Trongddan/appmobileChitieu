import AsyncStorage from "@react-native-async-storage/async-storage"

AsyncStorage
export const storage={
    setUser:async(accessToken,username)=>{
        try {
          await  AsyncStorage.setItem("accessToke","danken");
          await  AsyncStorage.setItem("userName","Dankk");
        } catch (error) {
            console.log('lưu trữ dữ liệu bị lỗi');
        }

    }

    ,    getUserName:async()=>{
        try {
           const username = await AsyncStorage.getItem("userName");
           if (username !== null ) {
            // Dữ liệu tồn tại trong AsyncStorage
            return {username}}
        } catch (error) {
            return null;
        }

    }
}