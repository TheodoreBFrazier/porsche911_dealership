import React from "react";

//Material UI



function Generation({ generation }) {
    return (
        <div className="single-generation">

                    <h2>  {generation.gen_name} </h2>
                    <h4>
                        <span>{generation.year_began} - {generation.year_ended}</span>
                    </h4>
<img src={`/images/${generation.image}`}
alt="generation-photo"
/>
        </div >
    )
}
export default Generation;

