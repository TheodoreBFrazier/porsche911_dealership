import React from "react";

//import hook
import fetchForSalePorsches from "../hooks/fetchForSalePorsches";
//import porscheFetch from "../hooks/fetchForSalePorsches";
import DealerInventory from "./AvailableCars"


//DO queries have to change to return values in line 35 in fetch?

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
      <br />
      {porschesForSale.length > 0 ? 
        <DealerInventory dealerInventory={porschesForSale.results[0]} />
       : null}
    </div>
  );
}

