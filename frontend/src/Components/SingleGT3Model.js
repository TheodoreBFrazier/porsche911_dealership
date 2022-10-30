import React from "react";

function SingleGT3Model({ gt3 }) {
    return (
        <div className="gt3-card">
            <div className="model-name">
                <h2>{gt3.model_name}</h2>
            </div>
            <div className="gt3-model-image">
                <img src={`/images/${gt3.image}`}
                    alt="turbo"
                />
            </div>
            <div className="model-price">
                <p>Starting at ${gt3.price.toLocaleString()}</p>
            </div>
            <div className="model-description">
                <h5>{gt3.description}</h5>
            </div>
        </div>
    );
};

export default SingleGT3Model;