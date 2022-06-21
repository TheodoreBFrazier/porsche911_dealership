import React from "react";

//image imports

// import the side profile photos of the 992 Turbo model range
//Standard Turbo
import turbo992 from "../Assets/images/porsche-model-18.png";
//Turbo S
import turbo992s from "../Assets/images/porsche-model-19.png";
//Standard Turbo Cab
import turbo992cab from "../Assets/images/porsche-model-21.png";
//Turbo S Cab
import turbo992scab from "../Assets/images/porsche-model-20.png";

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
          exhilerating Turbo S.
        </h6>

        <div className="the-range-turbo">
          <img src={turbo992} alt="porsche" />

          <img src={turbo992s} alt="turbo-S" />

          <img src={turbo992cab} alt="turbo-cab" />

          <img src={turbo992scab} alt="turbo-s-cab" />
        </div>
      </div>
    </div>
  );
}

export default TurboPage;
