import React from "react";
import { NavLink } from "react-router-dom";
import "./error.css";

const BodyError = () => {
  return (
    <div className="bodyError">
      <p className="textError">404 </p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <p className="lien">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </p>
    </div>
  );
};

export default BodyError;
