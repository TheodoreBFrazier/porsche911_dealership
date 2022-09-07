import React from "react";

export default function ModelsForSale( { ModelsForSale} ) {
    return (
        <ul>
            {ModelsForSale.map((element, index) => (
                <li key={index}>element.name</li>
            ))}
        </ul>
    )
}