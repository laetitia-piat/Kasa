import React, { useState } from "react";
import "../styles/collapse.css";

const CollapseList = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`body-collapse ${open && "open"}`}>
      <div className="collapse-title" onClick={handleClick}>
        <p>
          Fiabilité <span className="image-collapse"> </span>
        </p>
      </div>
      <div className="collapse-content">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </div>
      <div className="collapse-title">
        <p>
          Respect <span className="image-collapse"></span>
        </p>
      </div>
      <div className="collapse-content">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </div>
      <div className="collapse-title">
        <p>
          Service <span className="image-collapse"></span>
        </p>
      </div>
      <div className="collapse-content">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </div>
      <div className="collapse-title">
        <p>
          Sécurité <span className="image-collapse"></span>
        </p>
      </div>
      <div className="collapse-content">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </div>
    </div>
  );
};
export default CollapseList;
