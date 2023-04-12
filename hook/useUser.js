import React, { useState } from "react";
import { getUserById } from "../services/userService";

const useUser = () => {
  const [userInfo, setUserInfo] = useState();
  const getUserInfoByID = () => {
    getUserById(
      null,
      (res) => {
        setUserInfo(res.data)
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return{
    userInfo,
    getUserInfoByID
  }
};

export default useUser;
