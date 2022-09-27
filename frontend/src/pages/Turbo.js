import React from "react";


//image imports

// import the side profile photos of the 992 Turbo model range

//Standard Turbo
//import turbo992 from "../Assets/images/turbo-profile.png";
//Turbo S
//import turbo992s from "../Assets/images/turbo-s-profile.png";
//Standard Turbo Cab
//import turbo992cab from "../Assets/images/porsche-turbo-cab.png";
//Turbo S Cab
//import turbo992scab from "../Assets/images/porsche-s-cab-profile.png";

import turboEngine from "../Assets/Images/turbo-engine.png"
import fastTurbo from "../Assets/Images/turbo-at-speed.jpg"
import turboInside from "../Assets/Images/turbo-interior.jpg"
import greenCab from "../Assets/Images/python-green-turbo-cab.jpg"
import turboS from "../Assets/Images/turbo-s.jpg"
import coupeAndCab from "../Assets/Images/turbo-s-coupe-and-cabriolet.jpg"


import TurboModelRange from "../Components/TurboModelStats";

function TurboPage() {
  return (
    <div>
      <div className="hero-section-turbo">
        <img
          src="https://images4.alphacoders.com/109/1090120.jpg"
          alt="Turbo at speed"
        />
      </div>
      <section className="turbo-information">
        <div className="turbo-info-card-row">
          <h6>Turbo</h6>
          <h1>An impressive force.</h1>
          <h6>
            The ultimate "standard" Porsche. the 992-generation Turbo provides
            supercar levels of Performance with all the modern luxuries <br />
            of a modern 911. Choose from the regular Turbo, or the more
            exhilerating Turbo <div classname="red-s">S</div>.
          </h6>
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
      </section >


      <section className="turbo-s">
        <div className="turbo-s-image-container">
          <img
            src={turboS}
            alt="turbo-S-photo"
          />
        </div>        
        
        <div className="turbo-s-text">
          <h1>Turbo S Heading</h1>
          <h2>Turbo S Subheading</h2>
        </div>

        <div className="turbo-s-main-text">
          <h3>
            It redefines what it means to be quick and fast, and it does so
            without sacrificing the top-dog 911's great handling or luxurious
            grand touring abilities. Porsche offers a new Lightweight Package
            for its 911 Turbo and Turbo S that adds a few performance goodies
            while also shedding 66 pounds from the coupe's curb weight.
          </h3>
          <br />
          <h3>
            The Porsche 911 Turbo S is a fantastic sports car, one that rivals
            -- and often bests -- some of the world's finest supercars. That
            statement is true with or without the Lightweight Package. Forgo
            this option, and you won't miss a thing.
          </h3>
        </div>
      </section>

      <section className="turbo-coupe-and-cabriolet">
        <div className="turbo-coupe-and-cabriolet-image-container">
          <img 
          src={coupeAndCab}
          alt="Image of coupe and cab"
          />
          <h3>
            It redefines what it means to be quick and fast, and it does so
            without sacrificing the top-dog 911's great handling or luxurious
            grand touring abilities. Porsche offers a new Lightweight Package
            for its 911 Turbo and Turbo S that adds a few performance goodies
            while also shedding 66 pounds from the coupe's curb weight.
          </h3>
          <br />
          <h3>
            The Porsche 911 Turbo S is a fantastic sports car, one that rivals
            -- and often bests -- some of the world's finest supercars. That
            statement is true with or without the Lightweight Package. Forgo
            this option, and you won't miss a thing.
          </h3>
        </div>
      </section>




      <div className="turbo-carousel-buttons">
        <button>
          <h5>COUPE</h5>
        </button>
        <button>
          <h5>CABRIOLET</h5>
        </button>
      </div>
      <div className="model-data">
        <TurboModelRange />
      </div>
    </div >

  );
}

export default TurboPage;
