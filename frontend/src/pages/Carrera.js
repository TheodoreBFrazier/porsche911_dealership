import React from "react";

//import CarreraModelRange from "../Components/CarreraModelStats";

//import yellowCarrera from "../Assets/images/922-carrera-yellow.jpg";

function CarreraPage() {
  return (
    <div>
      <div className="carrera-hero">
        <div className="carrera-page-hero">

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


      <section className="design">

        <img src="https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1517460&show=1"
          alt="911 sketch"
        />
        <div className="design-text">

        </div>
      </section>


      <section className="engine">
        <img src="https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1505281&show=1"
          alt="911 cutaway"
        />
      </section>

      <section className="interior">
        <img src="https://www.carscoops.com/wp-content/uploads/2018/11/2fad0674-porsche-992-configurator-06.jpg"
          alt="922 interior"
        />
      </section>

      <section className="coupe-and-cabriolet">

        <img src="https://www.mad4wheels.com/img/free-car-images/mobile/16989/porsche-911-992-carrera-4s-cabriolet-2019-532097.jpg"
          alt="coupe-and-cab"
        />


      </section>

      <section className="targa-section">
        <div className="targa-picture">
          <img src="https://images.pistonheads.com/nimg/45681/mceu_3464404911652459553856.jpg"
            alt="targa-pic"
          />
        </div>
        <div className="targa-section-text">
          <h3>Porsche 911 Targa – features an innovative, fully automatic and motorized transitioning roof that transforms in just 19 seconds at the touch of a button.

          </h3>
        </div>
      </section>

      <section>
        <h1>The Range</h1>

      </section>

    </div>
  );
}

export default CarreraPage;
