import React from "react";
import { Link } from "react-router-dom";


import ContactForm from "./Contact";


function Home() {
  return (
    <div className="Home">
      <section className="Hero">
        <h1 className="Hero-H1">It's time.</h1>

        <div className="Hero-image">
          <img
            src="https://images.hdqwalls.com/wallpapers/porsche-911-carrera-s-2019-rear-ek.jpg"
            alt="911-hero"
          />
        </div>
      </section>

    </div>
  );
}

export default Home;
