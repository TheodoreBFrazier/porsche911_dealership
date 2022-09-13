import React from "react";

import gt3Hero from "../Assets/Images/gt3-and-gt3-touring.jpg"
import fastGt3 from "../Assets/Images/gt3-at-speed.jpg"

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

      <section className="gt3-intro">
        <img src={fastGt3} alt="gt3 at speed" />
        <h5></h5>
      </section>

      <section className="gt3-touring-intro-text">
        <div className="text-section">
          <h2>Go. <div className="word-fast"> Fast. </div> </h2>
          <p> Carpe diem, they say – seize the day. But we are Porsche. And so our motto for the new 911 GT3 models is: carpe secundum – get the most out of every second. 
            <br />
            <br />
            We know that your time is precious. And every minute in the cockpit is valuable. So, we have once again intensified everything that makes a sports car: performance, tuning, aerodynamics.
            <br />
            <br /> 
            Time flies. This is your time. Hop in.</p>
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
