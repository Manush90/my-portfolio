import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./pianeti.css";

const AboutMe = () => {
  useEffect(() => {
    const planet = document.querySelector(".aboutme-planet");
    planet.classList.add("dropIn", "dropIn-delay-2");

    const handleAnimationEnd = () => {
      planet.classList.remove("dropIn", "dropIn-delay-2");
      planet.classList.add("rotating");
    };

    planet.addEventListener("animationend", handleAnimationEnd);

    return () => {
      planet.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="d-flex mt-2 mx-2">
      <div>
        <h2 className="text-center mb-3 planet-title">About Me</h2>
        <Link to="/aboutme">
          <Image
            className="pianeta-image aboutme-planet"
            height={110}
            src="/cvplanet.png"
            rounded
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
