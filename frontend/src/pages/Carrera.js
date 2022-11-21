import React from "react";

//Importing all images

// HERO 
import heroImage from "../Assets/Images/carrera_hero.jpg";

//Bodystyle Sections
import coupePhoto from "../Assets/Images/carrera_coupe_prompt.jpg";
import cabriolet from "../Assets/Images/carrera_cabriolet.jpg";
import targa from "../Assets/Images/targa.jpg";

//Model Data

import AllCarreraModels from "../Components/AllCarreraModels.js";

//PNGs of Carrera Models


function CarreraPage() {
  return (
    <div>
        <div className="carrera-stats">
          <AllCarreraModels />
        </div>
    </div>
  );
};

export default CarreraPage;
