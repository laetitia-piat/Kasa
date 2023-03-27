import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackgroundAboutImg from "../assets/backgroundAbout.png";
import Banner from "../components/Banner";
import CollapseList from "../components/CollapseList";

const About = () => {
  return (
    <div>
      <Header />
      <Banner>
        <img
          className="image-background-about"
          src={BackgroundAboutImg}
          alt="background à propos"
        />
      </Banner>
      <CollapseList />
      <Footer />
    </div>
  );
};

export default About;
