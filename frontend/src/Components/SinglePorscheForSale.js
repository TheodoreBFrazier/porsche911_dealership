import React from "react";

export default function SingleCarForSale({ inventory }) {

    return (
        <div className="single-car">
            <h3>{inventory.model_name}</h3>
            <h6>{inventory.description}</h6>
        </div>
    )

}

