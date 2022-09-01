import React from "react";
import { Link } from "react-router-dom";


//Importing of images

import newoldporsche from "../Assets/Images/old-new-carrera.jpg"
//Hero image is in CSS file

function Home() {
  return (
    <div className="Home">
      <section className="Hero"></section>
      <section className="home-intro">
        <div className="intro-text">
          <h1 className="intro-heading">It's time.</h1>
          <p>
            Welcome to the only online store devoted exclusively to Porsche 911.
          </p>
        </div>
      </section>
      <section className="CTA">
        <div className="generations-CTA">
          <img src={newoldporsche} alt="older porsche and current 992"></img>
        </div>
      </section>
      <section className="992-carousel">
        A carousel where user can see carrera, gt3 and turbo models
      </section>
    </div>
  );
}

export default Home;
