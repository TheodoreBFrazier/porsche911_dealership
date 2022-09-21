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


import greenCab from "../Assets/Images/python-green-turbo-cab.jpg"

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
      <div className="turbo-intro">
        <h6>Turbo</h6>
        <h1>An impressive force.</h1>
        <h6>
          {" "}
          The ultimate "standard" Porsche. the 992-generation Turbo provides{" "}
          <br />
          supercar levels of Performance with all the modern luxuries <br />
          of a modern 911. Choose from the regular Turbo, or the more
          exhilerating Turbo <div classname="red-s">S</div>.
        </h6>

        <div className="green-cab-turbo">
          <h1 className="turbo-cab-warning">Hats and hairpeices be warned.</h1>
          <h3>2021 Porsche 911 Turbo and Turbo S Cabriolet Go Ballistic</h3>
          <p> It goes without saying that the air supply plays a decisive role in a 911 Turbo. But why limit it to the engine? Finally, the Cabriolet experience can also be rigorously driven to the top. The 911 Turbo Cabriolet models unite the classic silhouette of the 911 Turbo with the possibility of enjoying the unmistakable sound of the turbo engine even more intensively with the roof open. They are fitted with a fully automatic fabric roof. It has a fixed glass rear windshield and three integral magnesium elements that make the roof highly robust and yet particularly lightweight. The roof opens or closes in around 12 seconds – up to a speed of 31 mph. Also can be operated by remote control, if you like.</p>
          <img
            src={greenCab}
            alt="python green"
          />
        </div>

        <section className="turbo-s">
          <div className="turbo-s-text">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Turbo S Heading</h1>
            <h2>Turbo S Subheading</h2>
          </div>

          <img
            classname="turbo-s-picture"
            src="https://paultan.org/image/2020/03/992-Porsche-911-Turbo-S-Coupe-12-1.jpeg"
            alt="Turbo-S-coupe"
          />

          <br />
          <br />
          <br />

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
      </div>
    </div>
  );
}

export default TurboPage;
