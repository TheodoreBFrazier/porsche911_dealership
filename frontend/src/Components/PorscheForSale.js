import React from "react";

//all porsches for sale goes here.

export default function PorscheForSale({ availableCars }) {
  return (
    <ul>
      {availableCars.map((element, index) => (
        <li key={index}> {element.model_name}</li>
      ))}
    </ul>
  );
}
