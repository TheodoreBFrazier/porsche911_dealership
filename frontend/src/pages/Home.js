import React from "react";

import ContactForm from "./Contact";

function Home() {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="Hero-image">
          <img
            src="https://images.hdqwalls.com/wallpapers/porsche-911-carrera-s-2019-rear-ek.jpg"
            alt="911-hero"
          />

            <h1 className="Hero-H1">It's time.</h1>

        </div>
      </section>

      <section className="Home-intro">
        <div className="intro-text">
          <h1>put an icon in your garage</h1>
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

      <section className="Current-model-922">
        <img
          src="https://www.hdcarwallpapers.com/walls/2020_porsche_911_carrera_4s_2-HD.jpg"
          alt="992-at-speed"
        />
        <div className="other-992s">
          <div className="column">
            <div className="gt3">
              <img
                src="https://www.wsupercars.com/wallpapers-regular/Porsche/2022-Porsche-911-GT3-015-1080.jpg"
                alt="gt3"
                className="model-photo"
              />
            </div>
          </div>

          <div className="column">
            <div className="turbo">
              <img
                src="https://www.wsupercars.com/wallpapers-regular/Porsche/2021-Porsche-911-Turbo-003-1080.jpg"
                alt="turbo img"
                className="model-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="Coming-soon">
        <div className="Coming-soon-hero-image">
          <img
            src="https://mediaassets.pca.org/pages/pca/images/content/img_35.jpg"
            alt="sport-classic"
          />
        </div>
      </section>

      <section className="Home-cta">
        <div className="column-cta">
          <img
            src="https://assets.whichcar.com.au/image/upload/s--tPCIOKFH--/c_fill,q_auto:good/c_scale,w_3072/f_auto/v1/archive/whichcar/2018/11/28/-1/Seven-generations-of-the-Porsche-911-in-pictures.jpg"
            alt="all gens"
            className="generations-picture"
          />
        </div>

        <div className="column-cta">
          <img
            src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Technik/Schl%C3%BCsselfertig_CPM/Schluesselfertig_991/jcr:content/Schluesselfertig_991.jpg"
            alt="Porsche and key"
            className="porsche"
          />
        </div>
      </section>

      <section className="contact">
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
