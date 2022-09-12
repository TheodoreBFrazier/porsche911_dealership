import React from "react";

import gt3Hero from "../Assets/Images/gt3-and-gt3-touring.jpg"

import Gt3Pngs from "../Components/Gt3ModelsPng.js";
import GT3ModelRange from "../Components/GT3ModelStats";

export default function GT3Page() {
  return (
    <div>
            <section className="gt3-hero">
        <div className="gt3-page-hero">
          <img src={gt3Hero} alt="GT3 and GT3 Touring Together"></img>
        </div>
      </section>
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
