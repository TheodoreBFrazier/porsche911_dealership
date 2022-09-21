import React from "react";
import Collapsible from 'react-collapsible';



function SingleCarreraModel({ carrera }) {
    return (
        <div className="carrera-card">
            <div className="model-name">
                <h2>{carrera.model_name}</h2>
            </div>
            <div className="carrera-model-image">
                <img src={`/images/${carrera.image}`}
                    alt="carrera"
                />
            </div>
            <div className="model-price">
                <p>Starting at ${carrera.price.toLocaleString()}</p>
            </div>
            <div className="model-description">
                <h5>{carrera.description}</h5>
            </div>
            <Collapsible trigger="Start here">
                <div className="technical-data-collaspable">
                    <p><strong>Engine: </strong>{carrera.motor}</p>
                    <p><strong>Bore:</strong>{carrera.bore}</p>
                    <p><strong>Stroke: </strong>{carrera.stroke}</p>
                    <p><strong>Displacment:</strong>{carrera.displacement}</p>
                    <p><strong>Power Output:</strong>{carrera.max_power}</p>
                    <p><strong>Max Power:</strong>{carrera.max_power_at_rpm}</p>
                    <p><strong>Max Engine Speed:</strong>{carrera.max_engine_speed}</p>
                    <p><strong>Max Torque:</strong>{carrera.max_torque}</p>
                    <p><strong>Max Torque @ RPM:</strong>{carrera.max_torque_at_rpm}</p>
                    <p><strong>Max Power Per Liter:</strong>{carrera.max_power_per_liter}</p>
                    <p><strong>Power To Weight Ratio:</strong>{carrera.power_to_weight}</p>
                </div>
            </Collapsible>
        </div>
    )
}

export default SingleCarreraModel;