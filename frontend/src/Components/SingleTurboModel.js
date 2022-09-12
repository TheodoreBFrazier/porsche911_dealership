import React from "react";

import turbopic from "../Assets/Images/turbo.png";
import turboS from "../Assets/Images/turbo-s.png";
import turboCab from "../Assets/Images/turbo-cab.png";
import turboSCab from "../Assets/Images/turbo-s-cab.png";

function SingleTurbo({ turbo, props }) {

  return (
    <div className = "single-model">
      <h3>{turbo.model_name}</h3>
      <p>Starting at ${turbo.price.toLocaleString()}</p>
      <p>{turbo.description}</p>
      <h6>Explore</h6>
    </div>
  );
}

export default SingleTurbo;
