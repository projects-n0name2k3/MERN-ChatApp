import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="container mx-auto flex items-center justify-center  h-[calc(100vh-60px)]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
