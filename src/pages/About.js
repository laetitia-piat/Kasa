import React from "react";
import BackgroundAboutImg from "../assets/backgroundAbout.png";
import Banner from "../components/Banner/Banner";
import liste from "../data/content-collapse.json";
import Collapse from "../components/Collapse/Collapse";


const About = () => {


  return (
    <>
      <Banner image={BackgroundAboutImg} />
      {liste.map(({ title, content}) => (
        <Collapse key={title} title={title} content={content} />
      ))
      }
  
    </>
  );
};

export default About;
