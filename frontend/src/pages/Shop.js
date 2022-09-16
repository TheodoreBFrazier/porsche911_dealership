import React from "react";
import shopSearchBar from "../Components/SearchPorscheShop"
import DealerInventory from "../Components/AvailableCars";
import ForSaleImages from "../Components/forSaleImages";

function Shop() {
  return (
    <div>
  <ForSaleImages />
            <DealerInventory /> 
            <ForSaleImages />   
    </div>
  );
}

export default Shop;
