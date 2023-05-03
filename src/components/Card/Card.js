import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    /*Création du lien pour aller sur la page correspondant à l'id de la card */
    <Link className="home-item" to={"/accomodation/" + props.id}>
      <img
        className="home-item-cover"
        src={props.image}
        alt={`${props.title} cover`}
      />
      <h3 className="titre">{props.title}</h3>
    </Link>
  );
};

export default Card;
