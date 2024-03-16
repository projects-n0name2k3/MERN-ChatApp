import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = true;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, []);
  return (
    <section className="flex flex-1 h-full">
      <Outlet />
    </section>
  );
};

export default RootLayout;
