import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const Projects = () => {
  useEffect(() => {
    const planets = document.querySelectorAll(".pianeta-image");
    planets.forEach((planet, index) => {
      planet.classList.add("dropIn", `dropIn-delay-1`);

      const handleAnimationEnd = () => {
        planet.classList.remove("dropIn", `dropIn-delay-1`);
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
          <h2 className="text-center mb-3">Projects</h2>
          <Image className="pianeta-image" height={110} src="/pianeta2.png" rounded />
        </div>
      </div>
    </>
  );
};

export default Projects;
