import React from "react";
import logoFooter from "../../assets/logo-footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo-footer" src={logoFooter} alt="Logo Kasa" />
      <p className="txt-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
