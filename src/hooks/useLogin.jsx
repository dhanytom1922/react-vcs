import React, { useEffect, useState } from "react";
import { getUsername } from "../Services/product.service";

const useLogin = () => {
  // state username product
  const [username, setUsername] = useState("");
  useEffect(() => {
    //product page harus menggunakan login token
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    // getUsername(token);
    setUsername(getUsername(token));
  }, []);
  return username;
};

export default useLogin;
