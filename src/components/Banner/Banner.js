import React from "react";
import "./banner.css";

const Banner = ({ image, children }) => {
  //Utilisation des props image et children
  return (
    <div className="banner">
      <img src={image} className="bannerImage" alt="banner" />
      {children}
    </div>
  );
};

export default Banner;
