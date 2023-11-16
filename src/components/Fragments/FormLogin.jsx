import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Index";
import { login } from "../../Services/auth.service";

const FormLogin = () => {
  // login fail 
  const [loginFailed, setLoginFailed] = useState('');
  // ---
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // window.location.href = "/products";
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log('login');


    // ----
    // handle login username 
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem('token', response)
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data)
        //console.log(response.response.data); //didapat dari error response data
      }
    })

    // ----
    // handle login token auth

  };

  // cursor useREF 
  const usernameRef = useRef(null);
  useEffect(() => {
     usernameRef.current.focus();
  }, [])


  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        placeholder="Achmad Dhany"
        type="text"
        name="username"
        ref= {usernameRef}
        />
      <InputForm
        label="Password"
        placeholder="******"
        type="password"
        name="password"
        />
      <Button variant="bg-blue-500 w-full" type="submit">Login</Button>
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
