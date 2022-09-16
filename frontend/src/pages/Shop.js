import React from "react";
import ShopSearchBar from "../Components/SearchPorscheShop"
import DealerInventory from "../Components/AvailableCars";
import ForSaleImages from "../Components/forSaleImages";

function Shop() {
  return (
    <div>
  <ForSaleImages />
  <ShopSearchBar />
            <DealerInventory /> 
            <ForSaleImages />   
    </div>
  );
}

export default Shop;
