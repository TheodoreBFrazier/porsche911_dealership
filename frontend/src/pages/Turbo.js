import React from "react";

//Add turbo photo to Asset folder

import TurboMovie from "../Components/TurboMovieEmbed";

import turboEngine from "../Assets/Images/turbo-engine.png"
import fastTurbo from "../Assets/Images/turbo-at-speed.jpg"
import turboInside from "../Assets/Images/turbo-interior.jpg"
import turboS from "../Assets/Images/turbo-s.jpg"
import coupeAndCab from "../Assets/Images/turbo-s-coupe-and-cabriolet.jpg"

import AllTurboModels from "../Components/AllTurboModels";

function TurboPage () {
  return (
    <div>
      <div className="hero-section-turbo">
        <img
          src="https://images4.alphacoders.com/109/1090120.jpg"
          alt="Turbo at speed"
        />
      </div>

      <section className="turbo-movie-main">
        <TurboMovie embededMovieId="rGObN2F6Hbg/" />
      </section>

      <section className="turbo-information">
        <div className="turbo-info-card-row">
          <div className="text">
            <h6>Turbo</h6>
            <h1 className="heading-super">An impressive force.</h1>
            <h4>
              The ultimate "standard" Porsche. the 992-generation Turbo provides
              supercar levels of Performance with all the modern luxuries
              of a modern 911. Choose from the regular Turbo, or the more
              exhilerating Turbo S.
            </h4>
            <h5>Our engineers like to talk about the most perfect sports car ever. Incredible performance,
              whilst being comfortable and fully suitable for everyday use. The 911 Turbo models continue this philosophy.
            </h5>
            <div className="turbo-card-container">
              <div className="card">
                <div className="content">New engine generation: six-cylinder horizontally opposed engine with VTG twin-turbo</div>
              </div>
              <div className="card">
                <div className="content">20/21-inch 911 Turbo forged alloy wheels</div>
              </div>
              <div className="card">
                <div className="content">10.9-inch touchscreen display</div>
              </div>
              <div className="card">
                <div className="content">Zero to sixty in 2.6 seconds</div>
              </div>
            </div>

          </div>
        </div>
        <div className="turbo-info-card-row">
          <div className="image-box">
            <img
              src={turboEngine}
              alt="turbo-engine"
            />
          </div>
          <div className="image-box">
            <img
              src={fastTurbo}
              alt="fast turbo"
            />
          </div>
          <div className="image-box">
            <img
              src={turboInside}
              alt="fast turbo"
            />
          </div>
        </div>
      </section>


      <section className="turbo-s">
        <div className="turbo-s-image-container">
          <div className="text">
            <h1> Go faster with S.</h1>
          </div>
          <img
            src={turboS}
            alt="turbo-S-photo"
          />
        </div>
      </section>

      <section className="turbo-coupe-and-cabriolet">
        <div className="turbo-coupe-and-cabriolet-image-container">
          <div className="text">
            <h1>Top or topless. Take your pick.</h1>
            <p>Yep, it’s the cabriolet version of the new road-crushing 911 Turbo S. And, as is the tradition with these things, it’s a little bit heavier – 69.8kg to be precise – than the coupe thanks to the additional bracing and hardware for the roof mechanism.
              So you’d expect it to be a little slower, worse handling than the tin top. That’s just the way it is. But not here in Porsche World.</p>
          </div>
          <img
            src={coupeAndCab}
            alt="Image of coupe and cab"
          />
        </div>
      </section>

      <div className="turbo-carousel-buttons">
        <button>
          <h6>COUPE</h6>
        </button>
        <button>
          <h6>CABRIOLET</h6>
        </button>
      </div>

      <section className="model-data">
        <div className="model-data">
          <AllTurboModels />
        </div>
      </section >
    </div>
  );
}

export default TurboPage;
