import React from "react";

//image imports

// import the side profile photos of the 992 Turbo model range

//Standard Turbo
import turbo992 from "../Assets/images/turbo-profile.png";
//Turbo S
import turbo992s from "../Assets/images/turbo-s-profile.png";
//Standard Turbo Cab
import turbo992cab from "../Assets/images/porsche-turbo-cab.png";
//Turbo S Cab
import turbo992scab from "../Assets/images/porsche-s-cab-profile.png";

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

        <img
          src="https://flatsixes.com/wp-content/uploads/2020/04/Porsche-911-Turbo-S-The-Engine-0-23-screenshot.png?ezimgfmt=rs%3Adevice%2Frscb1-1"
          alt="Turbo-engine"
        />


        <section className="turbo-s">

          <div className="turbo-s-text">
<h1>Turbo S Heading</h1>
<h2>Turbo S Subheading</h2>
<p>The ultimate "standard" Porsche. the 992-generation Turbo provides supercar levels of Performance <br/> with all the modern luxuries  of a modern 911. Choose from the regular Turbo, or the more exhilerating Turbo S.</p>
          </div>

          <img
          classname="turbo-s-picture"
            src="https://paultan.org/image/2020/03/992-Porsche-911-Turbo-S-Coupe-12-1.jpeg"
            alt="Turbo-S-coupe"
          />
        </section>


        <div className="the-range-turbo">
          <img src={turbo992} alt="porsche" />
          <h6>Turbo</h6>

          <img src={turbo992s} alt="turbo-S" />
          <h6>Turbo S</h6>

          <img src={turbo992cab} alt="turbo-cab" />
          <h6>Turbo Cabriolet</h6>

          <img src={turbo992scab} alt="turbo-s-cab" />
          <h6>Turbo S Cabriolet</h6>
        </div>
      </div>
    </div>
  );
}

export default TurboPage;
