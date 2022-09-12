import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";

import turbo from "../Assets/Images/turbo.png";
import turboS from "../Assets/Images/turbo-s.png";
import turboCab from "../Assets/Images/turbo-cab.png";
import turboSCab from "../Assets/Images/turbo-s-cab.png";

import TurboPngs from "./TurboModelPngs";


const API = process.env.REACT_APP_API_URL;

function TurboModelRange() {
  const [turbos, setTurbos] = useState([]);
  const [modelPngs, setModelPngs] = useState([])

  const turboPngArr = [
    <img src={turbo} />,
    <img src={turboS} />,
    <img src={turboCab} />,
    <img src={turboSCab} />,
  ]

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
    <div className="turbo-model-data">
            {turbos.map((turbo) => {
              return <SingleTurbo key={turbo.turbo_id} turbo={turbo} />;
                
            })}
       
  

    </div>
  )
}


export default TurboModelRange;
