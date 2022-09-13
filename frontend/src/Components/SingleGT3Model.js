import React from "react";

function SingleGT3 ({ gt3 }) {
    return (
        <div className="single-model">
            <h6>{gt3.model_name}</h6>
            <p>Starting at ${gt3.price.toLocaleString()}</p>
        </div>
    )
}

export default SingleGT3;