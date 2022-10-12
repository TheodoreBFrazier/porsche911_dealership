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
        <div className="current-model-992-text">
          <p>NEW</p>
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
        <section />
        <div className="carrera-cards">
          <section className="overview">
            <div className="overview-intro"> <h2 className="h2">All new. </h2> <h1 className="h1-red">All Porsche.</h1> </div>
          </section>
          <div className="carrera-overview-cards-container">
            <div className="card">
              <div className="content">
                <h6>ENGINES</h6>
                <h4>New turbocharged engines with more higher power output and improved gas mileage.</h4>
                <hr className="rule" />
                <p>New, larger turbochargers with symmetrical layout</p>
                <p>22 kW (30 PS) increase in power to 331 kW (450 PS) at 6,500/min</p>
                <p>characteristic and appealing sound experience </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h6>STRUCTURALLY SOUND</h6>
                <h4> The chassis of the Porsche 911 sets standards for sports cars – and has done so in every generation. </h4>
                <hr className="rule" />
                <p>New, larger turbochargers with symmetrical layout</p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h6>COMFORT</h6>
                <h4>New cockpit is a reminder of virtues found even in the very first 911: clarity and formal unambiguity. </h4>
                <hr className="rule" />
                <p>Revamped seats with lightweight construction</p>
                <p>New partial leather interior in the colours Black or Slate Grey</p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h6>BODYSTYLES FOR EVERY TASTE</h6>
                <h4> A familiar match with Porsche design DNA: the new 911 is wider, more assertive, and more muscular. </h4>
                <hr className="rule" />
                <p> Completely new LED headlights</p>
                <p> Rear end with LED strip</p>
                <p> Now 20 millimetres longer and a great deal wider</p>
              </div>
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
