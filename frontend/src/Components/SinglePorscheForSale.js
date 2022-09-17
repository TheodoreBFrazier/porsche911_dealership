import React from "react";

export default function SingleCarForSale({ porsche }) {

    return (
        <div className="single-car">
            <h3>{porsche.year}  {porsche.model_name} {porsche.body_style}</h3>
            <h6>${porsche.price.toLocaleString()}</h6>
        </div>
    )

}

