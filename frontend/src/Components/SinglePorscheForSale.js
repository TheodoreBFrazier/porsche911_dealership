import React from "react";

export default function SingleCarForSale({ porsche }) {

    return (
        <div className="single-car">
            <h3>{porsche.model_name}</h3>
            <h6>{porsche.description}</h6>
        </div>
    )

}

