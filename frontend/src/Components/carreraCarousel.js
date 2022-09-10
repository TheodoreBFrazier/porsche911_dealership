import React from "react";
import { useState, useEffect } from "react"

//Can reuse SingleCarreraModel component 
import SingleCarreraModelData from "./SingleCarreraCarouselData.js";
import axios from "axios";

//Import PNG images of the Carrera models -> static 
import carreraCoupe from "../Assets/Images/carrera.png"
import carreraCab from "../Assets/Images/carrera-s-cabriolet.png"
import carreraFour from "../Assets/Images/carrera-4.png"
import carreraFourCab from "../Assets/Images/carrera-4-cabriolet.png"
import carreraSCoupe from "../Assets/Images/carrera-s.png"
import carreraSCab from "../Assets/Images/carrera-s-cabriolet.png"
import carrera4SCoupe from "../Assets/Images/carrera-4s-coupe.png"
import carrera4SCab from "../Assets/Images/carrera-4s-cab.png"
import targa4 from "../Assets/Images/targa-4.png"
import targa4S from "../Assets/Images/targa-4s.png"
import gtsCoupe from "../Assets/Images/gts.png"
import gtsCab from "../Assets/Images/gts-cab.png"
import fourGtsCoupe from "../Assets/Images/gts-4.png"
import fourGtsCab from "../Assets/Images/gts-cab.png"
import fourGtsTarga from "../Assets/Images/4-gts-targa.png"

const carreraPngs = [
    carreraCoupe, 
    carreraCab, 
    carreraFour, 
    carreraFourCab, 
    carrera4SCab, 
    carreraSCoupe, 
    carreraSCab, 
    carrera4SCoupe, 
    targa4, 
    targa4S, 
    gtsCoupe, 
    gtsCab, 
    fourGtsCoupe, 
    fourGtsCab, 
    fourGtsTarga
]

//Import API
const API = process.env.REACT_APP_API_URL;



export default function CarouselCarrera () {
    const [carreraData, setCarreraData] = useState([])


    useEffect(() => {
        axios.get(API + "/carrera")
        .then((response) => {
            setCarreraData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="carrera-carousel">
            <p>Model Title will go here</p>


            {carreraData.map((carrera) => {
                    return <SingleCarreraModelData key={carrera.model_id} carrera={carrera} />
                })}
            
        </div>
    )

}