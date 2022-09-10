import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";

const API = process.env.REACT_APP_API_URL;

function TurboCarouselData() {
  const [turbos, setTurbos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(API + "/turbo")
      .then((response) => {
        setTurbos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="carousel">
      <div className="turbo-carousel">
        <div
          className="turbo-arr-carousel-inner"
          style={{ transform: "translateX(-0%)" }}
        >
          {turbos.map((turbo) => {
            return (
              <SingleTurbo
                key={turbo.turbo_id}
                turbo={turbo}
                style={{ width: "100%" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TurboCarouselData;
