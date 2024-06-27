import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./pianeti.css";

const Home = () => {
  useEffect(() => {
    const planet = document.querySelector(".home-planet");
    planet.classList.add("dropIn", "dropIn-delay-0");

    const handleAnimationEnd = () => {
      planet.classList.remove("dropIn", "dropIn-delay-0");
      planet.classList.add("rotating");
    };

    planet.addEventListener("animationend", handleAnimationEnd);

    return () => {
      planet.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="d-flex mx-2">
      <div>
        <h2 className="text-center mb-3 planet-title">Home</h2>
        <Link to="/">
          <Image
            className="bigPlanet pianeta-image home-planet"
            height={130}
            src="/pianeta6.png"
            rounded
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
