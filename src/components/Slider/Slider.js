import React, { useState } from "react";
import { useParams } from "react-router-dom";
import homeData from "../../data/home.json";
import carouselRight from "../../assets/carousel-right.png";
import carouselLeft from "../../assets/carousel-left.png";
import "../Slider/slider.css";

const Slider = () => {
  //Creation du Hook UseState pour le slider (1ere image => 0)
  const [current, setCurrent] = useState(0);
  //Récuperation de l'id avec le Hook UseParams
  let { id } = useParams();
  //Comparaison de l'id de l'url avec les id dans le homeData
  let datas = homeData.find((element) => element.id === id);
  //Création de la constante Length pour le nombre d'image dans le slider
  const length = datas.pictures.length;

  //Modif du useState current pour avancer ou reculer le slider selon le click choisi
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
