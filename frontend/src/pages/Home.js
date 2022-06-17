import React from "react";
import herohome from "../images/heroimg.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="Hero" style={{ backgroundImage: `url(${herohome})` }}>
        <h1>This is the home page!!!</h1>
      </div>
    </div>
  );
}

export default Home;
