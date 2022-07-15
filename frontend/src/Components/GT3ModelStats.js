import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

import SingleGT3 from "./SingleGT3Model";


const API = process.env.REACT_APP_API_URL;

function GT3ModelRange () {
    const [gt3s, setGt3s] = useState([])

    useEffect(() => {
        axios.get(API + "/Gt3")
            .then((response) => {
                setGt3s(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <div className="gt3-arr">
                {gt3s.map((gt3) => {
                    return <SingleGT3 key={gt3.gt3_id} gt3={gt3} />
                })}
            </div>
        </div>
    );



}

export default GT3ModelRange;