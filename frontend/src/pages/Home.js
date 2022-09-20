import React from "react";
import { Link } from "react-router-dom";


//Importing of images
// HERO ---- 
import newoldporsche from "../Assets/Images/old-new-carrera.jpg"
// Carrera COUPE
//Hero image is in CSS file
import SingleCarreraModelStats from "../Components/CarreraTechnicalSpecs";

import sell from "../Assets/Images/porsche-normal.jpg"


function Home() {
  return (
    <div className="Home">
      <section className="Hero"></section>
      <section className="home-intro">
        <div className="intro-text">
          <h1 className="intro-heading">It's time.</h1>
          <p>
            Welcome to the only online store devoted exclusively to Porsche 911!
          </p>
        </div>
      </section>
      <section className="CTA">
        <div className="generations-CTA">
          <div className="cta-row">
            <h4>SELL</h4>
            <p>Have a 911 to sell? No matter the age and conditon, we can help you give your 911 a loving home. </p>
          </div>
          <div className="cta-row">
            <h4>SHOP</h4>
            <p>Ready to add a 911 to your garage? Take a a look at our inventory of both new and used Porsche 911s. </p>
          </div>
          <div className="cta-row">
            <h4>50 Years of History.</h4>
            <p>Learn about the history of perhaps the most iconic sports car.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
