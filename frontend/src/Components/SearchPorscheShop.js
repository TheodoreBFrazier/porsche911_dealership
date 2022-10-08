import React from "react";


//import hook
//import fetchForSalePorsches from "../hooks/fetchForSalePorsches";
//import porscheFetch from "../hooks/fetchForSalePorsches";
import DealerInventory from "./AvailableCars"


export default function ShopSearchBar( {searchTerm, setSearchTerm}) {

  //const { porschesForSale, setPorschesForSale } = fetchForSalePorsches();

  return (
    <div className="search">
      <div className="search-text">
      <h2>Search for a Porsche 911.</h2>
      <h5>Find the 911 that fits your performance and financial needs.</h5>
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="   Search for a Porsche"
          value={searchTerm}
          //onChange={(event) => setPorschesForSale({ ...porschesForSale, model_name: event.target.value })}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <br />
      </div>
      <div>
        {/* {porschesForSale.length > 0 ?
          <DealerInventory dealerInventory={porschesForSale.model_name.results[0]} />
          : null} */}
      </div>
    </div>
    
  );
}

