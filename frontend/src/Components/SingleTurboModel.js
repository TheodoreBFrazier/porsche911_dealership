import React from "react";

function SingleTurbo({ turbo }) {

  return (
    <div className="single-model">
      <h3>{turbo.model_name}</h3>
      <img src={`/images/${turbo.image}`}
        alt="turbo"
      />
      <h6>Starting at ${turbo.price.toLocaleString()}</h6>
      <p>{turbo.description}</p>
      <h6>Explore</h6>
    </div>
  );
}

export default SingleTurbo;
