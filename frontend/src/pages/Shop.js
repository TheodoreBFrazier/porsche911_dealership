import React, { Fragment } from "react";
import ShopSearchBar from "../Components/SearchPorscheShop";
import DealerInventory from "../Components/AvailableCars";


function Shop() {
  return (
    <Fragment>
            <ShopSearchBar />
            <DealerInventory />
           
    </Fragment>
  );
}

export default Shop;
