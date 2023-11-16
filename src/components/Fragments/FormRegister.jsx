import React from "react";
import InputForm from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        placeholder="Enter your name here"
        type="text"
        name="fullname"
      />
      <InputForm
        label="Email"
        placeholder="Enter your email"
        type="email"
        name="email"
      />
      <InputForm
        label="Password"
        placeholder="******"
        type="password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        placeholder="******"
        type="password"
        name="confirmPassword"
      />
      <Button variant="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
