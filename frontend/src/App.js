//Import BrowserRouter info
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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


//Style Sheets
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/992carrera" element={<CarreraPage  />} />
            <Route path="/turbo" element={<TurboPage />} />
            <Route path="/GT3" element={<GT3Page />} />
            <Route path="/sportclassic" element={<SportClassic />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
