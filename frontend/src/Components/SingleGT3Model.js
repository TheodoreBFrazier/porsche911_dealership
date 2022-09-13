import React from "react";

function SingleGT3 ({ gt3 }) {
    return (
        <div className="single-model">
            <h5>{gt3.model_name}</h5>
            <h6>Starting at ${gt3.price.toLocaleString()}</h6>
            <p>{gt3.description}</p>
        </div>
    )
}

export default SingleGT3;