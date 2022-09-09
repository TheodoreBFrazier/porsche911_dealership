import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function fetchForSalePorsches() {
  // Grab the data from the API
  const [porschesForSale, setPorschesForSale] = useState({
    model_name: "",
    results: [],
  });
  //The filtered data

  useEffect(() => {
    if (porschesForSale.porsche_id !== "") {
      const timeoutId = setTimeout(() => {
        //.......
        const forSaleFetch = async () => {
          try {
            const forSaleResults = await axios.get(API + "/porschestore");
            setPorschesForSale({
              ...porschesForSale,
              results: forSaleResults.porschesForSale,
          
            });
          } catch (error) {
            console.log(error);
          }
        };
        forSaleFetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [porschesForSale.porsche_id]);

  return { porschesForSale, setPorschesForSale };
}

export default fetchForSalePorsches;
