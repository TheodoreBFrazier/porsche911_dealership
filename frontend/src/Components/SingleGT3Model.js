import React from "react";

function SingleGT3 ({ gt3 }) {
    return (
        <div className="turbo-card">
            <h2>{gt3.model_name}</h2>
            <p>Starting at ${gt3.price.toLocaleString()}</p>
        </div>
    )
}

export default SingleGT3