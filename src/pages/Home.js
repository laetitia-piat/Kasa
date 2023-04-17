import React from "react";
import Banner from "../components/Banner/Banner";
import background from "../assets/background.png";
import "../components/Banner/banner.css";
import Card from "../components/Card/Card";
import homeData from "../data/home.json";
import "../components/Card/Card.css";

const Home = () => {
  return (
    <>
      <Banner image={background}>
        <h2 className="text-background">Chez vous, partout et ailleurs</h2>
      </Banner>
      <div className="accomodations">
        {homeData &&
          homeData.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.cover}
              title={item.title}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
