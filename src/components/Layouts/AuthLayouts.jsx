import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
// import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="bg-blue-800 p-2 absolute top-2 right-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className=" text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome please enter your details
        </p>
        {children}
        <Navigation type={type} />
        {/* <p className="text-sm text-center mt-5">
          {type === "login" ? "Don't have an account? " : "Have an account? "}
          
          {type === 'login' && (          <Link to="/register" className="font-bold text-blue-500">
            Register
          </Link>)
          }
          {type === 'register' && (          <Link to="/login" className="font-bold text-blue-500">
            Login
          </Link>)
          }
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm text-center mt-5">
        Dont have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm text-center mt-5">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
