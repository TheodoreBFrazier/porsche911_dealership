import React, { Fragment } from "react";
import ShopSearchBar from "../Components/SearchPorscheShop";
import DealerInventory from "../Components/AvailableCars";
import PorschesForSale from "../Components/PorscheForSale";

function Shop() {
  return (
    <Fragment>
            <ShopSearchBar />
            <DealerInventory />
            <PorschesForSale />
    </Fragment>
  );
}

export default Shop;
