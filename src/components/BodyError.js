import React from "react";
import { NavLink } from "react-router-dom";

const BodyError = () => {
  return (
    <div id="bodyError">
      <div id="titleError">
        <p id="textError">404 </p>
        <p id="oups">Oups! La page que vous demandez n'existe pas.</p>
        <p id="lien">
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </p>
      </div>
    </div>
  );
};

export default BodyError;
