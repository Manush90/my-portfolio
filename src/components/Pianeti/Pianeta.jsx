import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex mx-2">
        <div>
          <h2 className="text-center mb-3">Home</h2>
          <Image
            className="rotating bigPlanet pianeta-image"
            height={130}
            src="/pianeta6.png"
            rounded
          />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
