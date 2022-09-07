import React from "react";

//all porsches for sale goes here.
import ModelsForSale from "../Components/ModelsForSale"

export default function PorscheForSale({ porsches }) {
    return (
        <div>
        <h1>{porsches.name}</h1>
        <ModelsForSale ModelsForSale={porsches.models} />
        </div>
    );
}