import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Carousel from "@brainhubeu/react-carousel";

import SingleTurbo from "./SingleTurboModel";

//Import the turbo photos
import turbo from "../Assets/Images/turbo.png";
import turboS from "../Assets/Images/turbo-s.png";
import turboCab from "../Assets/Images/turbo-cab.png";
import turboSCab from "../Assets/Images/turbo-s-cab.png";

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
    <div className="carousel">
      <div>
      </div>
      <div className="carousel-item" style={{ width: "100%" }}>
        <div className="turbo-array" style={{ display: "grid", gridTemplateColumns: "auto auto"}} >
          {turbos.map((turbo) => {
            return <SingleTurbo key={turbo.turbo_id} turbo={turbo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TurboModelRange;
