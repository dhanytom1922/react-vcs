import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Elements/Button/Index";
import useLogin from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";



const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);


  const {total} = useTotalPrice();


// {console.log(isDarkMode)}

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = (event) => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end px-10 text-white h-20 bg-blue-500 items-center">
      {username}{" "}
      <Button variant="bg-red-500 ml-5" onClick={handleLogout}>
        Logout
      </Button>
      <div className="items-center mr-5 bg-gray-800 ml-5 p-2 rounded-md ">
        Item: {totalCart} | Price: ${total}
      </div>
      <Button
        className="bg-blue-800 p-2 ml-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
