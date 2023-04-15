import React from "react";
import Banner from "../components/Banner/Banner";
import background from "../assets/background.png";
import "../components/Banner/banner.css";
import HomeList from "../components/HomeList/HomeList";

const Home = () => {
  return (
    <>
      <Banner image={background}>
        <h2 className="text-background">Chez vous, partout et ailleurs</h2>
      </Banner>
      <HomeList />
    </>
  );
};

export default Home;
