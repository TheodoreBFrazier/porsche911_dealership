import React from "react";

function Generation ({ generation }) {
    return (
        <div className="Single-generation">
        
              <h2>  {generation.gen_name} </h2>
              <h4>
                <span>{generation.year_began} - {generation.year_ended}</span>
            </h4>
        </div>
    )
}

export default Generation;