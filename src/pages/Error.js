import React from "react";
import "../styles/error.css";
import BodyError from "../components/BodyError";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <BodyError />
      <Footer />
    </div>
  );
};

export default Error;
