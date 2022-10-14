import React from "react";

function Generation({ generation }) {
    return (
        <div className="single-generation">

            <h1>  {generation.gen_name} </h1>
            <h4>
                <span>{generation.year_began} - {generation.year_ended}</span>
            </h4>
            <img src={`/images/${generation.image}`}
                alt="generation-photo"
            />
            <h4> {generation.description} </h4>
        </div >
    );
}
export default Generation;

