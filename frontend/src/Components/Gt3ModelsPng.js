import React from "react";

import gt3 from "../Assets/Images/gt3.png";
import gt3Touring from "../Assets/Images/gt3-tourning.png";


export default function TurboPngs() {
  const gt3PngArr = [
    <img src={gt3} />,
    <img src={gt3Touring} />,
  ];

  let returnGt3Png = gt3PngArr.map((png) => {
    return png;
  });

  return <div className="gt3-model-png">{returnGt3Png}</div>;
}