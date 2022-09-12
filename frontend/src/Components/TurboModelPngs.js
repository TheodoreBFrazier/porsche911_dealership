import React from "react";

import turbo from "../Assets/Images/turbo.png";
import turboS from "../Assets/Images/turbo-s.png";
import turboCab from "../Assets/Images/turbo-cab.png";
import turboSCab from "../Assets/Images/turbo-s-cab.png";

export default function TurboPngs() {
  const turboPngArr = [
    <img src={turbo} />,
    <img src={turboS} />,
    <img src={turboCab} />,
    <img src={turboSCab} />,
  ];

  let returnTurboPng = turboPngArr.map((png) => {
    return png;
  });

  return <div className="turbo-model-png">{returnTurboPng}</div>;
}
