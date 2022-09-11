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

const TestCarousel = () => (
    <Carousel plugins={['arrows']}>
    <img src={turbo} alt="turbo"/>
    <img src={turboCab} alt="turbo-cab"/>
    <img src={turboS} alt="turbo-s"/>
    <img src={turboSCab} alt="turbo-s-cab"/>
  </Carousel>
)

export default TestCarousel;