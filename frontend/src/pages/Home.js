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
          
            <div className="gt3">
            <div className="column">
              <img
                src="https://www.cnet.com/a/img/resize/1c504d55427406e268c859036ae257741e5a1742/hub/2021/07/13/dd24d8ed-46a8-4586-8bf1-8f5df944859a/2022-porsche-911-gt3-touring-020.jpg?auto=webp&width=1092"
                alt="gt3"
              />
            </div>
          </div>
          
            <div className="turbo">
            <div className="column">
              <img
                src="https://www.supercars.net/blog/wp-content/uploads/2020/07/2020-Porsche-911-Turbo-S-014-2160-scaled.jpg"
                alt="turbo img"
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
