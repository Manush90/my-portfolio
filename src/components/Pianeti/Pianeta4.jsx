import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./pianeti.css";

const Contacts = () => {
  useEffect(() => {
    const planet = document.querySelector(".contacts-planet");
    planet.classList.add("dropIn", "dropIn-delay-3");

    const handleAnimationEnd = () => {
      planet.classList.remove("dropIn", "dropIn-delay-3");
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
        <h2 className="text-center mb-3 planet-title">Contacts</h2>
        <Link to="/contacts">
          <Image
            className="pianeta-image contacts-planet"
            height={110}
            src="/pianeta5.png"
            rounded
          />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
