import React from "react";
import NavigationBar from "./components/navbar/Navbar.jsx";
import "./App.css";
import "./index.css";
import MarqueeText from "./components/Marquee/Marquee.jsx";
import Pianeta from "./components/Pianeti/Pianeta.jsx";
import Pianeta2 from "./components/Pianeti/Pianeta2.jsx";
import Pianeta3 from "./components/Pianeti/Pianeta3.jsx";
import Pianeta4 from "./components/Pianeti/Pianeta4.jsx";
import ShuttleBoy from "./components/Pianeti/ShuttleBoy.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <MarqueeText />
        {/* <NavigationBar /> */}
      </div>
      <Container>
        <div className="responsiveScreen">
          <div className="d-flex justify-content-center ">
            <Pianeta />
            <Pianeta2 />
          </div>
          <div className="d-flex justify-content-center ">
            <Pianeta3 />
            <Pianeta4 />
          </div>
        </div>
      </Container>
      <ShuttleBoy />
      <Footer />
    </>
  );
}

export default App;
