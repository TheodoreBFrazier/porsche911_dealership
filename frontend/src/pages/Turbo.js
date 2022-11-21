import React from "react";

//Add turbo photo to Asset folder

import TurboMovie from "../Components/TurboMovieEmbed";

import turboEngine from "../Assets/Images/turbo-engine.png"
import fastTurbo from "../Assets/Images/turbo-at-speed.jpg"
import turboInside from "../Assets/Images/turbo-interior.jpg"
import turboS from "../Assets/Images/turbo-s.jpg"
import coupeAndCab from "../Assets/Images/turbo-s-coupe-and-cabriolet.jpg"

import AllTurboModels from "../Components/AllTurboModels";

function TurboPage() {
  return (
    <div>

      <section className="model-data">
        <div className="model-data">
          <AllTurboModels />
        </div>
      </section >
    </div>
  );
};

export default TurboPage;
