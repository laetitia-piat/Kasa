import React from "react";
import starFull from "../../assets/starFull.png";
import starEmpty from "../../assets/starEmpty.png";
import "../AccStars/accStars.css";

const AccStars = (props) => {
  const starValue = props.starValue;
  const numberStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {numberStar.map((rating, index) =>
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
