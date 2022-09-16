import React, { Component }  from 'react';
//Import BrowserRouter info
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Navigaion

import NavBar from "./Components/NavBar";

//Import Pages
import Home from "./pages/Home";

//992 Gen - current generation Pages 

//base 992 Carrera 
import CarreraPage from "./pages/Carrera";

//GT3 High Performance Model Page
import GT3Page from "./pages/GT3";

//Turbo Models
import TurboPage from "./pages/Turbo";

//Coming soon page for the upcoming Sport Classic Model
import SportClassic from "./pages/SportClassic";

//Generations 
import Generations from "./pages/Generations";

//User Panel
import UserPage from "./pages/User"

//About Page
import About from './pages/AboutMe';

//Online Shop
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrera" element={<CarreraPage  />} />
            <Route path="/turbo" element={<TurboPage />} />
            <Route path="/GT3" element={<GT3Page />} />
            <Route path="/sportclassic" element={<SportClassic />} />
            <Route path="/generations" element={<Generations />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/porschestore" element={<Shop />} />    
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
