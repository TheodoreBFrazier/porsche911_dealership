import React from "react";

import gt3Hero from "../Assets/Images/gt3-and-gt3-touring.jpg"
import fastGt3 from "../Assets/Images/gt3-at-speed.jpg"
import fastGt3Touring from "../Assets/Images/gt3-touring.jpg"

import AllGt3Models from "../Components/AllGt3Models";

export default function GT3Page() {
  return (
    <div>
      <section className="gt3-hero">
        <div className="gt3-page-hero">
          <img src={gt3Hero} alt="GT3 and GT3 Touring Together"></img>
        </div>
      </section>

      <section className="gt3">

        <div className="gt3-intro">
          <img src={fastGt3} alt="gt3 at speed" />
        </div>


        <div className="text-section">
          <div className="word-fast"> <h2> Go. </h2><h1> Go Fast. </h1> </div>
          <h6> Carpe diem, they say – seize the day. But we are Porsche. And so our motto for the new 911 GT3 models is: carpe secundum –
            get the most out of every second.
            <br />
            <br />
            We know that your time is precious. And every minute in the cockpit is valuable.
            So, we have once again intensified everything that makes a sports car: performance, tuning, aerodynamics.
            <br />
            <br />
            Time flies. This is your time. Hop in.</h6>
        </div>
      </section>

      <section className="gt3-touring">

        <div className="gt3-touring-intro">
          <img src={fastGt3Touring} alt="gt3 touring at speed" />
        </div>

        <div className="text-section">
          <div className="word-fast"> <h2> Fast can be </h2><h1> Luxurious </h1> </div>
          <h6>
            The innate preserve of the 911 GT3 with Touring Package is the open road – ideally a terrain full of challenging corners.
            With a performance of 502 hp and 4.0-liter six-cylinder horizontally opposed high-revving naturally aspirated engine, it sets a sporty tone.
            <br />
            <br />
            It will not be instantly recognizable to everyone on the road. But that is precisely what increases its puristic appeal. And the experience of driving it.
          </h6>
        </div>

      </section>


      <div className="gt3-carousel-buttons">
        <button>
          <h5>ALL MODELS</h5>
        </button>
        <button>
          <h5>GT3</h5>
        </button>
        <button>
          <h5>GT3 TOURING</h5>
        </button>
      </div>
      <div className="model-data">
        <AllGt3Models />
      </div>
    </div>
  );
}
