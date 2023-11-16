import axios from "axios";
// import { useCallback } from "react";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      // console.log(response);

      // -----
      // handle response gunakan useCallback
      callback(true, response.data.token) 
    })
    .catch((error) => {
      callback(false, error)
      // console.log(error);
    });
};
