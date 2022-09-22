import React from "react";

function SingleTurbo({ turbo }) {

  return (
    <div className="turbo-card">
      <div className="model-name">
        <h2>{turbo.model_name}</h2>
      </div>
      <div className="turbo-model-image">
        <img src={`/images/${turbo.image}`}
          alt="turbo"
        />
      </div>
      <div className="model-price">
        <p>Starting at ${turbo.price.toLocaleString()}</p>
      </div>
      <div className="model-description">
        <h5>{turbo.description}</h5>
      </div>
    </div>
  );
}

export default SingleTurbo;
