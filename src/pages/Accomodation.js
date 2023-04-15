import React from "react";
import homeData from "../data/home.json";
import { useParams } from "react-router-dom";
import "../styles/accomodation.css";
import Collapse from "../components/Collapse/Collapse";
import AccStars from "../components/AccStars/AccStars";
import Slider from "../components/Slider/Slider";
import Error from "./Error";

const Accomodation = () => {
  //Récupération de l'ID dans l'URL
  let { id } = useParams();
  //Récupération des données avec l'import et comparaison des id
  let datas = homeData.find((element) => element.id === id);
  //Si données différentes > renvoi vers la page erreur
  if (!datas) {
    return <Error />;
  }

  //-----------------------------------------------------------------------------------
  //Création de la constante "équipemenent" pour récuperer le tableau des équipements et le gerer en liste
  const equipment = (
    <ul className="accEquipment">
      {datas.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );
  //-----------------------------------------------------------------------------------
  //Création de la constante "tag" pour récuperer le tableau des tags et le gerer en liste
  const tag = (
    <ul className="accTag">
      {datas.tags.map((tag, index) => (
        <li key={index} className="accTagOne">
          {tag}
        </li>
      ))}
    </ul>
  );
  //---------------------------------------------------------------------------------------
  return (
    <div className="accomodationBody">
      <Slider />
      <div className="accInfos">
        <div className="accTitle">
          <h2>{datas.title}</h2>
          <p>{datas.location}</p>
          {tag}
        </div>
        <div className="accTagsRating">
          <p className="accHost">
            <span className="accName">{datas.host.name}</span>
            <img src={datas.host.picture} />
          </p>
          <span className="accStars">
            <AccStars starValue={datas.rating} />
          </span>
        </div>
      </div>
      <div className="collapse">
        <Collapse
          className="accCollapse"
          title="Description"
          content={datas.description}
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
