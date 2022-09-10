import React from "react";

//Importing all images

import heroImage from "../Assets/Images/carrera_hero.jpg";

import coupePhoto from "../Assets/Images/carrera_coupe_prompt.jpg";

import CarerraModelStats from "../Components/CarreraModelStats.js";

//Importing the carousel function 

import CarouselCarrera from "../Components/CarreraCarousel"

function CarreraPage() {
  return (
    <div>
      <div className="carrera-hero">
        <div className="carrera-page-hero">
          <img src={heroImage} alt="Front overhead view of 922 Carrera"></img>
        </div>
      </div>
      <section className="Home-intro">
        <div className="intro-text">
          <h1>An Icon Reimagined</h1>
        </div>
        <div className="sub-intro">
          <h6>
            {" "}
            The Porsche 911 is perhaps the world's most iconic sports cars.{" "}
            Welcome to the only online marketplace that specializes in 911s all
            generations from classics to the current 992.
          </h6>
        </div>
      </section>
      <section className="carrera-models">
        <div className="coupe">
          <img src={coupePhoto} alt="image of the Carrera coupe." />
        </div>
      </section>
      <section className="design">
        <img
          src="https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1517460&show=1"
          alt="911 sketch"
        />
        <div className="design-text"></div>
      </section>
      <section className="engine">
        <img
          src="https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1505281&show=1"
          alt="911 cutaway"
        />
      </section>
      <section className="interior">
        <img
          src="https://www.carscoops.com/wp-content/uploads/2018/11/2fad0674-porsche-992-configurator-06.jpg"
          alt="922 interior"
        />
      </section>
      <section className="coupe-and-cabriolet">
        <img
          src="https://www.mad4wheels.com/img/free-car-images/mobile/16989/porsche-911-992-carrera-4s-cabriolet-2019-532097.jpg"
          alt="coupe-and-cab"
        />
      </section>
      <section className="targa-section">
        <div className="targa-picture">
          <img
            src="https://images.pistonheads.com/nimg/45681/mceu_3464404911652459553856.jpg"
            alt="targa-pic"
          />
        </div>
        <div className="targa-section-text">
          <h3>
            Porsche 911 Targa – features an innovative, fully automatic and
            motorized transitioning roof that transforms in just 19 seconds at
            the touch of a button.
          </h3>
        </div>
      </section>
      <section>
        <div className = "carrera-carousel-buttons">
          <button>
            <h5>COUPE</h5>
          </button>
          <button>
            <h5>CABRIOLET</h5>
          </button>
          <button>
            <h5>TARGA</h5>
          </button>
        </div>
      </section>
      <CarerraModelStats />
   
    </div>
  );
}

export default CarreraPage;
