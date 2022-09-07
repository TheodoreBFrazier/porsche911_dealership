import React from "react";

//import hook
import porscheFetch from "../hooks/fetchForSalePorsches";

export default function ShopSearchBar() {
  const { data, setData } = porscheFetch();
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Porsche"
        /* set data to search*/
        value={data.slug}
        onChange={(event) => setData({ ...data, slug: event.target.valye })}
      />
      <br />
      {data.results.length > 0 ? (
        <PorscheForSale car={data.results[0]} />
      ) : null}
    </div>
  );
}

export default ShopSearchBar;
