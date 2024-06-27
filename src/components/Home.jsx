import React from "react";
import { Container } from "react-bootstrap";
import Pianeta from "./Pianeti/Pianeta";
import Pianeta2 from "./Pianeti/Pianeta2";
import Pianeta3 from "./Pianeti/Pianeta3";
import Pianeta4 from "./Pianeti/Pianeta4";
import ShuttleBoy from "./Pianeti/ShuttleBoy";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
