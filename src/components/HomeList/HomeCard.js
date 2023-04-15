import React from "react";
import { useNavigate } from "react-router-dom";
import "./homeList.css";

const HomeCard = ({ datas }) => {
  const { id, title, cover } = datas;
  const navigate = useNavigate();

  function handleclick() {
    navigate("/accomodation/" + id);
  }

  return (
    <div className="home-item" onClick={handleclick}>
      <img className="home-item-cover" src={cover} alt={`${title} cover`} />
      <h3 className="titre">{title}</h3>
    </div>
  );
};

export default HomeCard;
