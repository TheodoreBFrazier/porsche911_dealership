import React from "react";

function SingleTurbo({ turbo }) {
    return (
        <div className="turbo-card">
            <h2>{turbo.model_name} + hi</h2>
            <p>Starting at ${turbo.price.toLocaleString()}</p>
            <p>{turbo.description}</p>
        </div>
    )
}

export default SingleTurbo