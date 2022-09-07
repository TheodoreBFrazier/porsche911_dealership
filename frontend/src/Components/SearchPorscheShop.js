import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const API = process.env.REACT_APP_API_URL;

function ShopSearchBar({ userPorscheSearch }) {
  const [porschesForSale, setPorschesForSale] = useState([]);

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

  const handleChange = (event) => {
    event.preventDefault();
    setState: setSearchPorscheInput(event.target.value);
  };

  if (searchPorscheInput.length > 0) {
    porschesForSale.filter((porsche) => {
      return porsche.model_name.match(searchPorscheInput);
    });
  }

  return (
    <div className="shop-searchbar">
      <TextField
        id="shop-search-bar"
        className="text"
        onInput={(event) => {
          userPorscheSearch(event.target.value);
        }}
        label="Search for a Porsche:'"
        variant="outlined"
        placeholder=" Ex: 'Turbo','Cabriolet','Targa...'"
      />
      <IconButton type="submit" aria-label="search-test">
        <SearchIcon style={{ fill: "pink" }} />
      </IconButton>
    </div>
  );
}

export default ShopSearchBar;
