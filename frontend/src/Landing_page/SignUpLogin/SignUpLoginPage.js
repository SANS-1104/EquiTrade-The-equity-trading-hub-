import React from "react";
import Signup from "./SignUp";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

const SignUpLoginPage = () => {
  return (
    <div className="my-20">
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default SignUpLoginPage;
