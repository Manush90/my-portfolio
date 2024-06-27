import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const Home = () => {
  useEffect(() => {
    const planets = document.querySelectorAll(".pianeta-image");
    planets.forEach((planet, index) => {
      planet.classList.add("dropIn", `dropIn-delay-0`);

      const handleAnimationEnd = () => {
        planet.classList.remove("dropIn", `dropIn-delay-0`);
        planet.classList.add("rotating");
      };

      planet.addEventListener("animationend", handleAnimationEnd);

      return () => {
        planet.removeEventListener("animationend", handleAnimationEnd);
      };
    });
  }, []);

  return (
    <>
      <div className="d-flex mx-2">
        <div>
          <h2 className="text-center mb-3">Home</h2>
          <Image className="bigPlanet pianeta-image" height={130} src="/pianeta6.png" rounded />
        </div>
      </div>
    </>
  );
};

export default Home;
