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
          <div className="text">
            <h2>Porsche Dealership</h2>
            <h4>BUY AND SHOP WITH CONFIDENCE</h4>
            <h4>Welcome to Porsche Store, the only online marketplace devoted soley to the porsche 911.
              Search our inventory of both new and used 911s. Our inventory includes classics, air-cooled
              and modern water-cooled 911s.
              <br />
              We also help sellers find serious buyers. If you need to part with your 911, we can help you
              find your prized Porsche a new home.
            </h4>
            <div className="button-section-home">
              <button className="view-shop-button">
                <Link to={`/porschestore`} style={{ textDecoration: 'none', color: 'white' }}>
                  VIEW DETAILS
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="create-account">
        <h4>Hi</h4>
      </section>
      <section className="overview-cards">
        <h1>Hi</h1>
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
      </section>
    </div>
  );
}

export default Home;
