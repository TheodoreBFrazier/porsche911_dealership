//Import BrowserRouter info
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages

import Home from "./pages/Home";

//Style Sheets
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
