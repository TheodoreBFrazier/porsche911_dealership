import React from "react";
import PorscheGenerations from "../Components/PorscheGenerations";

import oldAndNewPorsche from "../Assets/Images/orginal-and-997.jpg"

function Generations() {
    return (
        <div className="generations">
            <div className="generations-hero">
                <img
                    src={oldAndNewPorsche}
                    alt="An orginal 911 and a Porsche 997"
                />
            </div>
            <div class="text">
<h3>As the 911 approaches it's 50th year. We take a look at all eight generations of this truly iconic sports car, that has stood the test of time.</h3>
            </div>
            <div className="generations-display">
                <div className="generations-child">
                    <PorscheGenerations />
                </div>
            </div>
        </div>
    );
}


export default Generations