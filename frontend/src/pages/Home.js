import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Hero">
        <img
          src="https://images.hdqwalls.com/wallpapers/porsche-911-carrera-s-2019-rear-ek.jpg"
          alt="911-hero"
        />
      </div>
      <div className="Home-intro">
        <h1>HI this is the intro.</h1>
      </div>
      <div className="Current-model-922">
        <h1>922</h1>
        <div className="992-carrera-base">992 carrera</div>
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
      </div>
      <div className="Coming-soon">hi</div>
    </div>
  );
}

export default Home;
