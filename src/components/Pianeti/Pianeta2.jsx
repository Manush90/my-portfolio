import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const Projects = () => {
  useEffect(() => {
    const planet = document.querySelector(".projects-planet");
    planet.classList.add("dropIn", "dropIn-delay-1");

    const handleAnimationEnd = () => {
      planet.classList.remove("dropIn", "dropIn-delay-1");
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
        <h2 className="text-center mb-3 planet-title">Projects</h2>
        <Image className="pianeta-image projects-planet" height={110} src="/pianeta2.png" rounded />
      </div>
    </div>
  );
};

export default Projects;
