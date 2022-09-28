import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ForSaleDetails() {
    const [porsche, setPorsche] = useState({})
    let { id } = useParams()


    useEffect(() => {
        axios
            .get(API + "/porschestore/" + id)
            .then((response) => {
                setPorsche(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return <article>
        <div>
            <div className="show-porsche">
                <h2> {porsche.year}  {porsche.model_name}</h2>
                <img src={porsche.main_image} alt={porsche.model_name} />
            </div>
        </div>
    </article>


}