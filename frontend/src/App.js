import React from 'react';
import { useState } from 'react';
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
import UserPortal from "./pages/UserPortal"

//About Page
import About from './pages/AboutMe';

//Online Shop
import Shop from './pages/Shop';

//Single View of For Sale Car
import ForSaleDetails from './Components/ForSaleDetails';

import PeerToPeerSales from './pages/PeerToPeerSales';

//Sell Page

import UserLogIn from './pages/UserLogIn.js';
import EditUser from './pages/EditUser';
import CreateUserProfile from './Components/CreateUserProfile';


function App() {

  const [logText, setLogInText] = useState(
    localStorage.getItem("userId") ? "Log Out" : "Log In"
  );

  return (
    <div className="App">
      <Router>
        <NavBar/>
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
            <Route path="/about" element={<About />} />
            <Route path="/porschestore" element={<Shop />} />
            <Route path="/" element={<PeerToPeerSales/>} />
            <Route exact path="/porschestore/:id" element={<ForSaleDetails />} />
            <Route
              path="/users/login"
              element={<UserLogIn LogText={logText} setLogInText={setLogInText} />}
            />
            <Route path="/users/:id/" element={<UserPortal />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/users/create" element={< CreateUserProfile/>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;


