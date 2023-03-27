import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import background from "../assets/background.png";
import backgroundFilter from "../assets/background-filter.png";
import "../styles/banner.css";
import HomeList from "../components/HomeList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner>
        <img className="background-filter" src={backgroundFilter} />
        <img className="image-background-home" src={background} />
        <p className="text-background">Chez vous, partout et ailleurs</p>
      </Banner>
      <HomeList />
      <Footer />
    </div>
  );
};

export default Home;
