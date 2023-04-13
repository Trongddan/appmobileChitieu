import React, { useEffect, useState } from "react";
import { getAllExp } from "../services/expService";

const useExp = () => {
  const [listExp, setListExp] = useState([]);
  const getallExp = (id) => {
    getAllExp(
      { userId: id },
      (res) => {
        setListExp(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return {
    listExp,
    getallExp,
  };
};

export default useExp;
