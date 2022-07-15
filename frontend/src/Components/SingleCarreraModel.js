import React from "react";

function SingleCarreraModel ({ carrera }) {
    return (
        <div className="turbo-card">
            <h2>{carrera.model_name}</h2>
            <p>Starting at ${carrera.price.toLocaleString()}</p>
        </div>
    )
}

export default SingleCarreraModel;