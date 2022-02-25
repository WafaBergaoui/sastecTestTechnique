import React from "react";
import SearchBox from "./components/SearchBox";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <div>
                <img className="Bitmap" src="./assets/logo.jpg" alt="logo" />
                <SearchBox />
              </div>
            </div>
          </header>
        </div>
        <main>
          
        </main>
      </Router>
    </div>
  );
}

export default App;
