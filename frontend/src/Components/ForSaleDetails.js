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
                <div className="main-image-and-description">
                <h2> {porsche.year}  {porsche.model_name}</h2>
                    <div className="column">
                        <img src={`/images/${porsche.main_image}`} alt={porsche.model_name} />
                    </div>
                    <div className="column">
                        <h5>Description:</h5>
                        <h5> {porsche.description}</h5>
                    </div>
                </div>
                <div className="additional-photos">
                    <div className="photo">
                        <img src={`/images/${porsche.second_image}`} alt={porsche.model_name} />
                    </div>
                    <div className="photo">
                        <img src={`/images/${porsche.third_image}`} alt={porsche.model_name} />
                    </div>
                    <div className="photo">
                        <img src={`/images/${porsche.fourth_image}`} alt={porsche.model_name} />
                    </div>
                    <div className="photo">
                        <img src={`/images/${porsche.fifth_image}`} alt={porsche.model_name} />
                    </div>
                </div>
            </div>
        </div>
    </article>
}