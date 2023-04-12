import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userService";
import { storage } from "../storage/storage";

const useUser = () => {

  const [userInfo, setUserInfo] = useState();
  const getUserInfoByID = (id) => {
    getUserById(
      { id: id },
      (res) => {
        setUserInfo(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return {
    userInfo,
    getUserInfoByID,
  };
};

export default useUser;
