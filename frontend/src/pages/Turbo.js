import React from "react";

//image imports



import turbo992 from "../Assets/images/porsche-model-18.png";



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
 <img src={turbo992} alt="porsche" />

      </div>
    </div>
  );
}

export default TurboPage;
