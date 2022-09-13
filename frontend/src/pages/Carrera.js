import React from "react";

//Importing all images

import heroImage from "../Assets/Images/carrera_hero.jpg";

import coupePhoto from "../Assets/Images/carrera_coupe_prompt.jpg";

import CarerraModelStats from "../Components/CarreraModelStats.js";

import CarreraPngs from "../Components/CarreraModelsPngs";
import cabriolet from "../Assets/Images/carrera_cabriolet.jpg";
import targa from "../Assets/Images/targa.jpg";

function CarreraPage() {
  return (
    <div>
      <section className="carrera-hero">

        <img src={heroImage} alt="Front overhead view of 922 Carrera"></img>

      </section>
      <section className="Home-intro">
        <div className="intro-text">
          <div>
            <h6> 01 </h6> &nbsp; <h1>An Icon Reimagined</h1>
          </div>
        </div>
        <div className="sub-intro">
          <h6>
            The Porsche 911 is perhaps the world's most iconic sports cars.
            Welcome to the only online marketplace that specializes in 911s all
            generations from classics to the current 992.
          </h6>
        </div>
      </section>
      <section className="model-range-text">
        <div>
          <h6> 02 </h6> &nbsp; <h2> Three Unique Bodystyles.</h2>
          <h6>
            Classic coupe, airy cabriolet or stylish targa. Take your pick.
          </h6>
        </div>
      </section>

      <section className="carrera-models">
        <div className="carrera-coupe">
          <img src={coupePhoto} alt="image of the Carrera coupe." />
        </div>
        <div className="cab-and-targa-column">
          <div className="column">
            <img src={cabriolet} alt="image of the Carrera cabriolet." />
          </div>
          <div className="column">
            <img src={targa} alt="image of the Targa." />
          </div>
        </div>
      </section>
      &nbsp,
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <section className="engine-info">
<div className="engine">
        <div className="column">
          <div className="column-card">
          <h6> 04 </h6> &nbsp; <h2>A Comfortable Place To Be.</h2>
          <p>
            Sporty, ergonomic, timeless: the cockpit with GT sports steering wheel, instrument cluster and sports seats plus.
          </p>
          </div>
        </div>

        <div className="column">
          <img
            src="https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1505281&show=1"
            alt="911 cutaway"
          />
        </div>
        </div>
      </section>


      <section className="interior">
        <div className="interior-info-card">
          <div className>
            <h6> 04 </h6> &nbsp; <h2>A Comfortable Place To Be.</h2>
            <p>
              Sporty, ergonomic, timeless: the cockpit with GT sports steering wheel, instrument cluster and sports seats plus.
            </p>
          </div>
        </div>
        <div className>
          <img
            src="https://www.carscoops.com/wp-content/uploads/2018/11/2fad0674-porsche-992-configurator-06.jpg"
            alt="922 interior"
          />
        </div>
      </section>
      <section>
        <div className="carrera-carousel-buttons">
          <button>
            <h5>ALL MODELS</h5>
          </button>
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
        <div className="model-data">
          <CarreraPngs />
          <CarerraModelStats />
        </div>
      </section>
    </div>
  );
}

export default CarreraPage;
