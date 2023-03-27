import React, { useEffect } from "react";
import liste from "../data/content-collapse.json";
import axios from "axios";

const Test = () => {
  //const liste = "../data/content-collapse.json";
  //console.log(liste);

  useEffect(() => {
    axios.get("../data/content-collapse.json").then((res) => console.log(res));
    // .catch;
  }, []);

  return <div></div>;
};

export default Test;
