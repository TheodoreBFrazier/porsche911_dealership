import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Generation from './Generation';




const API = process.env.REACT_APP_API_URL;

function PorscheGenerations() {
    const [generations, setGenerations] = useState([])

    useEffect(() => {
        axios.get(API + "/generations")
            .then((response) => {
                setGenerations(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            <div className="gens-arr">
                {generations.map((generation) => {
                    return <Generation key={generation.gen_id} generation={generation} />
                })}
            </div>
        </div>
    );



}

export default PorscheGenerations;