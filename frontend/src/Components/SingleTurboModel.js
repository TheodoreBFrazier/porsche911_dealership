import React from "react";
import TurboModelRange from "./TurboModelStats";

function SingleTurbo({ turbo }) {
    return (
        <div className="turbo-card">
            <h2>{turbo.model_name}</h2>
            <p>Starting at ${turbo.price.toLocaleString()}</p>
            <p>{turbo.description}</p>
        </div>
    )
}

export default SingleTurbo