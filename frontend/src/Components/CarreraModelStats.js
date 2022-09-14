import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import SingleCarreraModel from "./SingleCarreraModel";

const API = process.env.REACT_APP_API_URL;

function CarreraModelRange () {
    const [carreras, setCarreras] = useState([])

    useEffect(() => {
        axios.get(API + "/carrera")
            .then((response) => {
                setCarreras(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <div className="carrera-arr">
                {carreras.map((carrera) => {
                    return <SingleCarreraModel key={carrera.model_id} carrera={carrera} />
                })}
            </div>
        </div>
    );
    
}

export default CarreraModelRange;