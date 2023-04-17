import React, { useState } from "react";
import { useParams } from "react-router-dom";
import homeData from "../../data/home.json";
import carouselRight from "../../assets/carousel-right.png";
import carouselLeft from "../../assets/carousel-left.png";
import "../Slider/slider.css";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  let { id } = useParams();
  let datas = homeData.find((element) => element.id === id);
  const length = datas.pictures.length;

  const nexSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {length > 1 ? (
        <div className="arrow">
          <span className="position">
            <p>
              {current + 1}/{datas.pictures.length}
            </p>
          </span>
          <span className="arrowL" onClick={prevSlide}>
            <img src={carouselLeft} />
          </span>
          <span className="arrowR" onClick={nexSlide}>
            <img src={carouselRight} />
          </span>
        </div>
      ) : null}

      {datas.pictures.map((picture, id) => {
        return (
          <div key={id} className={id === current ? "slide active" : "slide"}>
            <img src={picture} alt="travel image" className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
