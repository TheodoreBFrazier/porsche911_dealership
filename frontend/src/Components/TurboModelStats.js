import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import SingleTurbo from "./SingleTurboModel";


const API = process.env.REACT_APP_API_URL;

function TurboModelRange () {
    const [turbos, setTurbos] = useState([])

    useEffect(() => {
        axios.get(API + "/turbo")
            .then((response) => {
                setTurbos(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <div className="turbo-arr">
                {turbos.map((turbo) => {
                    return <SingleTurbo key={turbo.turbo_id} turbo={turbo} />
                })}
            </div>
        </div>
    );



}

export default TurboModelRange;