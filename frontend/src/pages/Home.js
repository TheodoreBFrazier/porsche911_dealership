import React from "react";
import { Link } from "react-router-dom";


//Importing of images

// HERO ---- 
import newoldporsche from "../Assets/Images/old-new-carrera.jpg"
// Carrera COUPE
//Hero image is in CSS file
import currentPorsche from "../Assets/Images/red-992.jpg"




function Home() {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="hero-text">
          <h2>MOVE FOWARD</h2>
          <h1 className="em-fast">FAST</h1>
          <h4>With the exciting the Carrera, now available at Porsche 911 Boutiqye.</h4>
          </div>
      </section>
      <section className="home-intro">
        <div className="intro-text">
          <h1 className="intro-heading">Find the 911 of Your Dreams.</h1>
          <p>
            Welcome to the only online store devoted exclusively to Porsche 911!
          </p>
        </div>
        <div className="service-cards">
          <div className="service-cards-container">
            <div className="card">
              <div className="content">
                <h3>Pure 911</h3>
                <h5>As great as all Porsches are, we are the online online source devoted to soley the Porsche 911s. No Panameras, no Cayannes, no Macans, and no Boxters. </h5>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2> Top Selection</h2>
                <h4>Choose from large selection of Porsche 911s from every time period and generation. We even have a selction of one-off and rare models.</h4>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2> Sell With Confidence</h2>
                <h4>Need to part with your Porsche? We know it's tough to part with your beloved car, but we can partner with you to ensure your Porsche 911 finds a new home with a fellow ethusiast.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="current-model-992">
        <div className="current-model-992-text">
          <p className="new">NEW</p>
          <h1>992 Carrera</h1>
          <h3>The result of 50 years of 911 excellence. </h3>
          <p>Starting at $106,000</p>
        </div>
        <div >
          <img
            src={currentPorsche}
            alt="The Porsche 992"
          />
        </div>
      </section>
      <section className="carrera-cards">
        <div className="carrera-overview-cards-container">
          <div className="card">
            <div className="content">
              <h6>ENGINES</h6>
              <h4>New turbocharged engines with more higher power output and improved gas mileage.</h4>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h6>STRUCTURALLY SOUND</h6>
              <h4> The chassis of the Porsche 911 sets standards for sports cars – and has done so in every generation. </h4>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h6>COMFORT</h6>
              <h4>New cockpit is a reminder of virtues found even in the very first 911: clarity and formal unambiguity. </h4>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h6>BODYSTYLES FOR EVERY TASTE</h6>
              <h4> A familiar match with Porsche design DNA: the new 911 is wider, more assertive, and more muscular. </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-prompt">
        <div className="text">
          <h1> There is a 911 for everyone.</h1>
          <h2> Whether you are looking at obtaining the exhilerating new 992 generation 991, or looking for a high quality used 911 from one of the previous generations, we can help.</h2>
        </div>
        <hr className="rule" />
        <div className="actions">
          <Link to="/porschestore" style={{ textDecoration: 'none', color: 'black', border: '2px solid black' }}>
            View Inventory
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
