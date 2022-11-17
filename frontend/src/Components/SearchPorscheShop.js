import React from "react";


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
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <br />
      </div>
    </div>
    
  );
}

