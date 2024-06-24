import React from "react";
import NavigationBar from "./components/navbar/Navbar.jsx";
import "./App.css"; // Importa il file CSS principale
import "./index.css"; // Importa il file CSS globale
import MarqueeText from "./components/Marquee/Marquee.jsx";

function App() {
  return (
    <div className="App">
      <MarqueeText />
      <NavigationBar />
    </div>
  );
}

export default App;
