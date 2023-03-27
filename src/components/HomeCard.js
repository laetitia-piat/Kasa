import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/homeList.css";

const HomeCard = ({ id, cover, title }) => {
  function handleClick() {}

  return (
    <div className="home-card">
      <NavLink to="/accomodation/:id">
        <li key={id} className="home-item">
          <img className="home-item-cover" src={cover} alt={`${title} cover`} />
          <h3 className="titre">{title}</h3>
        </li>
      </NavLink>
    </div>
  );
};

export default HomeCard;
