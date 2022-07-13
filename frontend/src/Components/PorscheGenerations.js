import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Generation from './Generation';

const API = process.env.REACT_APP_API_URL;

function PorscheGenerations() {
    const [generations, setGenerations] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/generations/${id}`).then((response) => {
            console.log(response.data);
            setGenerations(response.data);
        });
    }, [id, API]);

    return (
        <section className='Generations-arr'>
            {generations.map((generation) => (
                <Generation key={generation.gen_id} generation={generation} />
            ))}
        </section>
    );
}

export default PorscheGenerations;