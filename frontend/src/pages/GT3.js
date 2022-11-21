import React from "react";

import gt3Hero from "../Assets/Images/gt3-and-gt3-touring.jpg"


import AllGt3Models from "../Components/AllGt3Models";

export default function GT3Page() {
  return (
    <div>
      <section className="gt3-hero">
        <div className="gt3-page-hero">
          <img src={gt3Hero} alt="GT3 and GT3 Touring Together"></img>
        </div>
      </section>


      <div className="model-data">
        <AllGt3Models />
      </div>
    </div>
  );
};
