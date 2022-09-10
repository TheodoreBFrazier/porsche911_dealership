import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";

//Importing Carousel Package
import { Carousel } from 'react-responsive-carousel'

const API = process.env.REACT_APP_API_URL;

function TurboCarouselData() {
  const [turbos, setTurbos] = useState([]);

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
  
      <Carousel>
    
          {turbos.map((turbo) => {
            return (
              <SingleTurbo
                key={turbo.turbo_id}
                turbo={turbo}
                style={{ width: "100%" }}
              />
            );
          })}
      
      </Carousel>
    
  );
}

export default TurboCarouselData;
