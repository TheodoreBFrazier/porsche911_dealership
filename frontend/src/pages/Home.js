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
      <section className="current-model-992">
        <section className="text">
          <h3>Near perfection</h3>
          <p>The 992 generation is the result of 50 years of 911. Coupe, Cabriolet or Targa. Turbocharged or naturally aspirated. Learn more about the 992 and take your pick.</p>
        </section>
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
          </div>
          <h5>Turbo</h5>
          <div className="image-container">
            <img src={turboPhoto}
              alt="Turbo PNG"
            />
            <div />
          </div>
          <h5>GT3</h5>
          <div className="image-container">
            <img src={gt3Photo}
              alt="Turbo PNG"
            />
            <Link to="/turbo">
Learn More
              </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
