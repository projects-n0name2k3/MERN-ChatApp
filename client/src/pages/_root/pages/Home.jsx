import React from "react";
import usePageTitle from "../../../hooks/useTitle";

const Home = ({ title }) => {
  usePageTitle(title);
  return <div className="h-screen">Home</div>;
};

export default Home;
