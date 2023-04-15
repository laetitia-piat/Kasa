import React from "react";
import BackgroundAboutImg from "../assets/backgroundAbout.png";
import Banner from "../components/Banner/Banner";
import liste from "../data/content-collapse.json";
import Collapse from "../components/Collapse/Collapse";

const About = () => {
  return (
    <>
      <Banner image={BackgroundAboutImg} />
      {liste.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.content} />
      ))}
    </>
  );
};

export default About;
