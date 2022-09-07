import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const API = process.env.REACT_APP_API_URL;

function ShopSearchBar({ searchPorscheInput }) {
  // Grab the data from the API
  const [porschesForSale, setPorschesForSale] = useState([]);
  //The filtered data

  useEffect(() => {
    axios
      .get(API + "/porschestore")
      .then((response) => {
        setPorschesForSale(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Set the search inputs
  const [searchPorscheInput, setSearchPorscheInput] = useState("");
  // Call back the search function with user search and data as parameters
  const filteredPorsches = userPorscheSearch(userQuery, setPorschesForSale);

  return (
    <div className="shop-searchbar">
      <ShopSearchBar
        userQuery={userQuery}
        setSearchPorscheInput={setSearchPorscheInput}
      />
      <div className="filtered-results">
        {filteredPorsches.map((porscheData) => (
          <div key={porscheData.porsche_id}>{porscheData}</div>
        ))}
      </div>
    </div>
  );
}

export default ShopSearchBar;
