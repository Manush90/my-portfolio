import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import MarqueeText from "./components/Marquee/Marquee.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Home from "./components/Home.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Cards from "./components/Project/Cards.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <MarqueeText />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/Cards" element={<Cards />} />

        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
