import React, { Component } from 'react';
//Import BrowserRouter info
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Navigaion

import NavBar from "./Components/NavBar"

//Import Pages
import Home from "./pages/Home";

import CarreraPage from "./pages/Carrera";
import GT3Page from "./pages/GT3";
import TurboPage from "./pages/Turbo";

//Generations 
import Generations from "./pages/Generations";

//User Panel
import UserPage from "./pages/User"

//About Page
import About from './pages/AboutMe';

//Online Shop
import Shop from './pages/Shop';

//Single View of For Sale Car
import ForSaleDetails from './Components/ForSaleDetails';

//Sell Page

import UserLogIn from './pages/UserLogIn';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrera" element={<CarreraPage />} />
            <Route exact path="/carrera/:id" />
            <Route path="/turbo" element={<TurboPage />} />
            <Route exact path="/turbo/:id" />
            <Route path="/GT3" element={<GT3Page />} />
            <Route exact path="/GT3/:id" />
            <Route path="/generations" element={<Generations />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/porschestore" element={<Shop />} />
            <Route exact path="/porschestore/:id" element={<ForSaleDetails />} />
            <Route path="/login" element={<UserLogIn />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
