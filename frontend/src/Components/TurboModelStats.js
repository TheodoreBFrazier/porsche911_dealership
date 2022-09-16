import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";
import TurboPngs from "../Components/TurboModelPngs";


const API = process.env.REACT_APP_API_URL;

function TurboModelRange() {
  const [turbos, setTurbos] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/turbo")
      .then((response) => {
        setTurbos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div class="turbo">
        <TurboPngs />
    <div className="turbo-model-data">
      {turbos.map((turbo) => {
        return <SingleTurbo key={turbo.turbo_id} turbo={turbo} />;
      })};
    </div>
    </div>
  )
}

export default TurboModelRange;
