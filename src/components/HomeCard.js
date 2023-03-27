import React from "react";
import "../styles/homeList.css";

const HomeCard = ({ id, cover, title }) => {
  function handleClick() {}

  return (
    <div className="home-card">
      <li key={id} className="home-item">
        <img className="home-item-cover" src={cover} alt={`${title} cover`} />
        <h3 className="titre">{title}</h3>
      </li>
    </div>
  );
};

export default HomeCard;
