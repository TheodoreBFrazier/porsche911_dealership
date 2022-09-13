import React from "react";

import carreraCoupe from "../Assets/Images/carrera.png";
import carreraCabriolet from "../Assets/Images/carrera-cabriolet.png";
import carreraFour from "../Assets/Images/carrera-4.png";
import carreraFourCab from "../Assets/Images/carrera-4-cabriolet.png";
import carreraS from "../Assets/Images/carrera-s.png";
import carreraSCab from "../Assets/Images/carrera-s-cabriolet.png"
import carreraFourS from "../Assets/Images/carrera-4s-coupe.png";
import carreraFourSCab from "../Assets/Images/carrera-4s-cab.png";
import targaFour from "../Assets/Images/targa-4.png";
import targaFourS from "../Assets/Images/targa-4s.png";
import carreraGts from "../Assets/Images/gts.png";
import carreraGtsCab from "../Assets/Images/gts-cab.png"
import carreraFourGts from "../Assets/Images/gts-4.png";
import carreraFourGtsCab from "../Assets/Images/carrera-4-gts-cab.png";
import gtsTarga from "../Assets/Images/4-gts-targa.png"

export default function CarreraPngs() {
  const carreraPngArr = [
    <img src={carreraCoupe} />,
    <img src={carreraCabriolet} />,
    <img src={carreraFour} />,
    <img src={carreraFourCab} />,
    <img src={carreraS} />,
    <img src={carreraSCab} />,
    <img src={carreraFourS} />,
    <img src={carreraFourSCab} />,
    <img src={targaFour} />,
    <img src={targaFourS} />,
    <img src={carreraGts} />,
    <img src={carreraGtsCab} />,
    <img src={carreraFourGts} />,
    <img src={carreraFourGtsCab} />,
    <img src={gtsTarga} />,
  ];

  let returnCarreraPng = carreraPngArr.map((png) => {
    return png;
  });

  return <div className="carrera-model-png">{returnCarreraPng}</div>;
}