import React from "react";

function SingleTurbo({ turbo }) {
    return (
        <div className="model-card">
            <h3>{turbo.model_name}</h3>
            <p>Starting at ${turbo.price.toLocaleString()}</p>
            <p>{turbo.description}</p>
        </div>
    )
}

export default SingleTurbo