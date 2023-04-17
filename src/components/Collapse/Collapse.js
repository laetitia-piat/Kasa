import React, { useState } from "react";
import "./collapse.css";

const Collapse = ({ title, content }) => {
  //creation du useState => pour l'ouverture et la fermeture du collapse > état de base > fermé
  const [open, setOpen] = useState(false);
  //creation de la fonction pour l'ouverture du collapse au click
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapseBodyOne ${open && "open"}`}>
      <div className="collapseTitle" onClick={handleClick}>
        <p className="collapseTxt">
          {title}
          <span className="image-collapse"> </span>
        </p>
      </div>
      <div className="collapseContent">{content}</div>
    </div>
  );
};

export default Collapse;
