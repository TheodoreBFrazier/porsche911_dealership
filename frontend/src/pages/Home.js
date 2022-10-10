import React from "react";
import { Link } from "react-router-dom";


//Importing of images
// HERO ---- 
import newoldporsche from "../Assets/Images/old-new-carrera.jpg"
// Carrera COUPE
//Hero image is in CSS file
import SingleCarreraModelStats from "../Components/CarreraTechnicalSpecs";


import carreraPhoto from "../Assets/Images/carrera.png"
import turboPhoto from "../Assets/Images/turbo.png"
import gt3Photo from "../Assets/Images/gt3.png"
import currentPorsche from "../Assets/Images/992-top-view.jpeg"



function Home() {
  return (
    <div className="Home">
      <section className="Hero"></section>
      <section className="home-intro">
        <div className="intro-text">
          <h1 className="intro-heading">Find the 911 of Your Dreams.</h1>
          <p>
            Welcome to the only online store devoted exclusively to Porsche 911!
          </p>
        </div>
      </section>
      <section className="current-model-992">
        <div className="current-model-992-banner">
          <p>Banner Text</p>
        </div>
        <div className="current-model-992-text">
          <p>NEW</p>
          <h1>992 Carrera</h1>
          <h3>The result of 50 years of 911 excellence. </h3>
          <p>Starting at $106,000</p>
        </div>
        <img
          src={currentPorsche}
          alt="The Porsche 992"
        />
      </section>
      <div className="container-992-types">
        <div className="column">
          <h5>Carrera</h5>
          <div className="image-container">
            <img src={carreraPhoto}
              alt="Carrera PNG"
            />
            <Link to="/carrera">
              Learn More
            </Link>
          </div>
          <h5>Turbo</h5>
          <div className="image-container">
            <img src={turboPhoto}
              alt="Turbo PNG"
            />
            <Link to="/turbo">
              Learn More
            </Link>
            <div />
          </div>
          <h5>GT3</h5>
          <div className="image-container">
            <img src={gt3Photo}
              alt="Turbo PNG"
            />
            <Link to="/gt3">
              Learn More
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
