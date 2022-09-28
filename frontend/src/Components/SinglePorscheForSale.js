import React from "react";
import { Link } from "react-router-dom";

export default function SingleCarForSale({ porsche }) {

    return (
        <div className="single-car-card">
            <Link to={`/porschestore/${porsche.porsche_id}`}>
                <div className="car-heading">
                    <h4>{porsche.year}  {porsche.model_name} </h4>
                </div>
                <div className="car-subheading">
                    <p>{porsche.color} - {porsche.transmission}</p>
                    <h3>${porsche.price.toLocaleString()}</h3>
                </div>
                <div className="forsale-model-image">
                    <img src={`/images/${porsche.main_image}`}
                        alt="for sale porsche main photo"
                    />
                </div>
            </Link>
        </div>
    );

}

