import React from "react";
import { useNavigate } from "react-router-dom";
import homeData from "../../data/home.json";
import "./Card.css";

const Card = () => {
  const navigate = useNavigate();

  function handleclick(id) {
    navigate("/accomodation/" + id);
  }

  return (
    <div className="accomodations">
      {homeData &&
        homeData.map((data, index) => (
          <div className="home-item" onClick={() => handleclick(data.id)}>
            <img
              key={index}
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

export default Card;
