import React from "react";
import "../styles/homeList.css";

const HomeCard = ({ id, cover, title }) => {
  function handleClick() {}

  return (
    <div className="home-card">
      <li key={id} className="home-item">
        <img className="home-item-cover" src={cover} alt={`${title} cover`} />
        <p className="titre">{title}</p>
      </li>
    </div>
  );
};

export default HomeCard;
