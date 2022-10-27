import React from "react";
import { Link } from "react-router-dom";


//Importing of images

// HERO ---- 
import homeHero from "../Assets/Images/hero-home-img.png"
import dealership from "../Assets/Images/dealership.webp"
// Carrera COUPE
//Hero image is in CSS file
import ContactForm from "../Components/ContactForm";

import testFeature from "../Assets/Images/993.jpg"




function Home() {
  return (
    <div className="Home">
      <section className="home-hero">
        <div className="hero-text">
          <h1 className="hero-text-heading">
            Hero Text Goes Here
          </h1>
          <h5>
            Hero text subheading will go here. We we add the text as neccesary. Have to figure out what the text will be.
          </h5>
        </div>
        <div className="hero-image">
          <img
            src={homeHero}
            alt="Carrera at speed"
          />
        </div>
      </section>
      <section className="home-intro">

        <div className="typography-container">

          <h1> The only dealership devoted to the Porsche 911. Search from a unrivaled selction of Porsche 911 from all eras. Both new and used models avaliable. Find the perfect 911 for you.</h1>
        </div>
      </section >
      <section className="featured">
        <div className="card">
          <div className="data">
            <div className="data-container">
              <div className="model-name">
  
                <p>This is the test</p>
              </div>
            </div>
            <div className="data-container">
              <div className="model-name">
     
                <p>... will the data be different?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div >
  );
}

export default Home;
