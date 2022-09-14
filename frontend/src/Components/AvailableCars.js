import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

/*import PorschesForSale from "./ModelsForSale";*/
import SingleCarForSale from "./SinglePorscheForSale";

const API = process.env.REACT_APP_API_URL;

export default function DealerInventory() {
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

  return (
    <div className="for-sale-array">
      {inventory.map((porsche) => {
        return <SingleCarForSale key={porsche.porsche_id} porsche={porsche} />
      })}
    </div>
  )
} 
