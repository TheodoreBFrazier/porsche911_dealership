import React from "react";

function SingleCarreraModelData ({ carrera }) {
    return (
        <div className="carrrera-model-data">
            <h2>{carrera.model_name}</h2>
            <p>Starting at ${carrera.price.toLocaleString()}</p>
            <p>{carrera.descripton}</p>
        </div>
    )
}

export default SingleCarreraModelData;