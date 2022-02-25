import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="grid-container">
          <header className="row">
            <Navbar />
          </header>
          <main>
            <HomeScreen />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
