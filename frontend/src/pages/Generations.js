import React from "react";
import PorscheGenerations from "../Components/PorscheGenerations";

import oldAndNewPorsche from "../Assets/Images/orginal-and-997.jpg"

function Generations() {
    return (
        <div>
            <div className="generations-hero">
                <img
                    src={oldAndNewPorsche}
                    alt="An orginal 911 and a Porsche 997"
                />
            </div>
            <PorscheGenerations />
        </div>
    )
}


export default Generations