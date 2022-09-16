import React from "react";
import PorscheGenerations from "../Components/PorscheGenerations";

import oldAndNewPorsche from "../Assets/Images/orginal-and-997.jpg"

function Generations() {
    return (
        <div>
            <img
                src={oldAndNewPorsche}
                alt="An orginal 911 and a Porsche 997"
            />
            <PorscheGenerations />
        </div>
    )
}


export default Generations