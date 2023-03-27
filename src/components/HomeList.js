import React, { useEffect, useState } from "react";
import homeData from "../data/home.json";
import "../styles/homeList.css";
import HomeCard from "./HomeCard";

const HomeList = () => {
  //const [homeData, setData] = useState([]);
  const homeData = require("../data/home.json");

  for (var i = 0; i < homeData.length; i++) {
    const obj = homeData[i];
  }

  return (
    <div className="accomodations">
      <ul className="home-list">
        {homeData.map(({ id, title, cover }) => (
          <HomeCard key={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  );
};

export default HomeList;
