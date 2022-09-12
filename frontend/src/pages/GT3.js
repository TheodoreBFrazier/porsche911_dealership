import React from "react";

import Gt3Pngs from "../Components/Gt3ModelsPng.js";
import GT3ModelRange from "../Components/GT3ModelStats";

export default function GT3Page() {
  return (
    <div>
      <div className="gt3-carousel-buttons">
        <button>
          <h5>ALL MODELS</h5>
        </button>
        <button>
          <h5>RAW PERFORMANCE</h5>
        </button>
        <button>
          <h5>TOURING</h5>
        </button>
      </div>
      <div className="model-data">
        <Gt3Pngs />
        <GT3ModelRange />
      </div>
    </div>
  );
}
