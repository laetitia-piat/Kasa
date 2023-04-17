import React from "react";
import "../styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bodyError">
      <p className="textError">404 </p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <p className="lien">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
};

export default Error;
