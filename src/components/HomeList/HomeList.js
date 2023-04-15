import React from "react";
import homeData from "../../data/home.json";
import "./homeList.css";
import HomeCard from "./HomeCard";

const HomeList = () => {
  return (
    <div className="accomodations">
      {homeData &&
        homeData.map((data, id) => <HomeCard key={id} datas={data} />)}
    </div>
  );
};
export default HomeList;
