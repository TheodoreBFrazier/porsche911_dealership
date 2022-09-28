import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

/*import PorschesForSale from "./ModelsForSale";*/
import SingleCarForSale from "./SinglePorscheForSale";

const API = process.env.REACT_APP_API_URL;

export default function DealerInventory({ searchTerm }) {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    axios
      .get(API + "/porschestore")
      .then((response) => {
        setInventory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let filteredInventory;

  if (searchTerm) {
    filteredInventory = inventory.filter(car => {
      return car.model_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  } else {
    filteredInventory = inventory
  }

  console.log(searchTerm)
  //Cases:
  // Loading
  // No searchterm with results
  // No searchterm no results
  // Searchterm w result
  //Searchterm no results

  return (
    <div className="for-sale-arr">
      {filteredInventory.map((porsche) => {
        return <SingleCarForSale key={porsche.porsche_id} porsche={porsche} />
      })}
    </div>
  )
} 
