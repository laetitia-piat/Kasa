import React from "react";
import starFull from "../../assets/starFull.png";
import starEmpty from "../../assets/starEmpty.png";
import "../AccStars/accStars.css";

const AccStars = (props) => {
  const starValue = props.starValue;
  //Creation du tableau du nombre d'étoile
  const numberStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {numberStar.map(
        (
          rating,
          index //map le tableau numberStar
        ) =>
          //ajout d'une condition pour l'affichage des etoiles vides ou pleines
          starValue >= rating ? (
            <img key={index} src={starFull} />
          ) : (
            <img key={index} src={starEmpty} />
          )
      )}
    </div>
  );
};

export default AccStars;
