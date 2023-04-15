import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-kasa" src={logo} alt="logo Kasa"></img>
      <ul className="listNav">
        <NavLink to="/">
          <li className="pointNav"> Accueil </li>
        </NavLink>
        <NavLink to="/about">
          <li className="pointNav"> A Propos </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
