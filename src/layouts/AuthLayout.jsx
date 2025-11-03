import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </>
  );
};

export default AuthLayout;
