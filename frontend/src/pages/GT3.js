import React from "react";

import gt3profile from "../Assets/images/gt3.png";

import gt3touringprofile from "../Assets/images/gt3-touring.png";

function GT3Page() {
  return (
    <div>
      <div className="the-range-gt3">
        <h1>All GT3 Info Will go here </h1>

        <img src={gt3profile} alt="porsche-gt3" />

        <img src={gt3touringprofile} alt="porsche-gt3-touring" />
      </div>
    </div>
  );
}

export default GT3Page;
