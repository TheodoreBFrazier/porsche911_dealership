import React from "react";

//import hook
//import porscheFetch from "../hooks/fetchForSalePorsches";
import PorscheForSale from "./PorschesForSale";
import fetchForSalePorsches from "../hooks/fetchForSalePorsches";

export default function ShopSearchBar() {
  const { porschesForSale, setPorschesForSale } = fetchForSalePorsches();
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Porsche"
        value={porschesForSale.model_name}
        onChange={(event) => setPorschesForSale({ ...porschesForSale, model_name: event.target.value })}
      />
      {porschesForSale.results.length > 0 ? 
        <PorscheForSale car={porschesForSale.results[0]} />
       : null}
    </div>
  );
}

