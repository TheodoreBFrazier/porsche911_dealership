import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";
import TurboPngs from "./TurboModelPngs"

const API = process.env.REACT_APP_API_URL;

function TurboModelRange() {
  const [turbos, setTurbos] = useState([]);
  const [ modelPngs, setModelPngs ] = useState([])

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
    <div>
  
      <div
        className="turbo-array"
        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        <div>
        <TurboPngs />
        </div>
        <div>
        {turbos.map((turbo) => {
          return <SingleTurbo key={turbo.turbo_id} turbo={turbo} />;
        })}
        </div>
      </div>
    </div>
  );
}

export default TurboModelRange;
