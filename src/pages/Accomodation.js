import React, { useState, useEffect } from "react";
import homeData from "../data/home.json";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/accomodation.css";
import Collapse from "../components/Collapse/Collapse";
import AccStars from "../components/AccStars/AccStars";
import Slider from "../components/Slider/Slider";
import Error from "./Error";
import AccTag from "../components/AccTag/AccTag";

const Accomodation = () => {
  //Récupération de l'ID dans l'URL
  let { id } = useParams();

  //creation du useState => pour stocker infos logement trouvé par son id
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    //Récupération des données avec l'import et comparaison des id
    let accomodationFind = homeData.find((element) => element.id === id);
    //on modifie le state, si le state a changé, le composant est re-renders
    setAccomodation(accomodationFind);
  }, [id]);

  if (!accomodation) {
    return <Error />;
  }
  //-----------------------------------------------------------------------------------
  //Création de la constante "équipemenent" pour récuperer le tableau des équipements et le gerer en liste
  const equipment = (
    <ul className="accEquipment">
      {accomodation.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  return (
    <div className="accomodationBody">
      <Slider />
      <div className="accInfosRating">
        <div className="accTitle">
          <h2>{accomodation.title}</h2>
          <p>{accomodation.location}</p>
          <div className="accTag">
            {accomodation.tags.map((tag, index) => (
              <AccTag key={index} tags={tag} />
            ))}
          </div>
        </div>

        <div className="accHostRating">
          <p className="accHost">
            <span className="accName">{accomodation.host.name}</span>
            <img src={accomodation.host.picture} />
          </p>
          <span className="accStars">
            <AccStars starValue={accomodation.rating} />
          </span>
        </div>
      </div>
      {/*------------------- PARTIE COLLAPSE--------------------------- */}
      <div className="collapse">
        <Collapse
          className="accCollapse"
          title="Description"
          content={accomodation.description}
        />
        <Collapse
          className="accCollapse"
          title="Equipements"
          content={equipment}
        />
      </div>
    </div>
  );
};
export default Accomodation;
