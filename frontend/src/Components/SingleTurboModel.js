import React from "react";

function SingleTurbo({ turbo }) {
    return (
        <div className="turbo-card">
            <h2>{turbo.model_name}</h2>
            <p>Starting at ${turbo.price.toLocaleString()}</p>
        </div>
    )
}

export default SingleTurbo