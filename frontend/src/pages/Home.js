import React from "react";

function Home() {
  return (
    <div className="Home">
      <section className="Hero">
        <img
          src="https://images.hdqwalls.com/wallpapers/porsche-911-carrera-s-2019-rear-ek.jpg"
          alt="911-hero"
        />
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
        <div className="cta-row">
          <div className="column-cta-1">First Column</div>
          <div className="column-cta-1">Second Column</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
