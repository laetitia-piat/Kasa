import React from "react";
import { useNavigate } from "react-router-dom";
import homeData from "../../data/home.json";
import "./homeCard.css";

const HomeCard = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/accomodation/" + id);
  }

  return (
    <div className="accomodations">
      {homeData &&
        homeData.map((data) => (
          <div className="home-item" onClick={handleclick}>
            <img
              key={data.id}
              className="home-item-cover"
              src={data.cover}
              alt={`${data.title} cover`}
            />
            <h3 className="titre">{data.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default HomeCard;
