import React from "react";

function SingleCarreraModelStats({ carrera }) {
    return (
        <div className="turbo-card">
            <div>{carrera.model_image}</div>
            <h2>{carrera.model_name}</h2>
            <p>Starting at ${carrera.price.toLocaleString()}</p>
            <hr />
            <h3>Technical Data</h3>
            <h5>Engine: </h5><p>{carrera.motor}</p>
            <h5>Bore: </h5><p>{carrera.bore}</p>
            <h5>Stroke: </h5><p>{carrera.stroke}</p>
            <h5>Displacment:</h5><p>{carrera.displacement}</p>
            <h5>Power Output:</h5><p>{carrera.max_power}</p>
            <h5>Max Power:</h5><p>{carrera.max_power_at_rpm}</p>
            <h5>Max Engine Speed:</h5><p>{carrera.max_engine_speed}</p>
            <h5>Max Torque:</h5><p>{carrera.max_torque}</p>
            <h5>Max Torque @ RPM:</h5><p>{carrera.max_torque_at_rpm}</p>
            <h5>Max Power Per Liter:</h5><p>{carrera.max_power_per_liter}</p>
            <p>Power To Weight Ratio:{carrera.power_to_weight}</p>
        </div>
    );
}

export default SingleCarreraModelStats;