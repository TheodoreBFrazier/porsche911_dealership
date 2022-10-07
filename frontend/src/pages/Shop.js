import React, { useState } from "react";
import SearchPorscheShop from "../Components/SearchPorscheShop"
import AvailableCars from "../Components/AvailableCars";


function Shop() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <SearchPorscheShop searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AvailableCars searchTerm={searchTerm} />
    </div>
  );
}

export default Shop;
