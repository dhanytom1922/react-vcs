import React from "react";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";


const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />{" "}
      {/* <p className="text-sm text-center mt-5">
         Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Login
        </Link>
      </p> */}
    </AuthLayouts>
  );
};

export default RegisterPage;
