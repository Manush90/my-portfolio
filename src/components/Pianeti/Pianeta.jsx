import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex rotating-clockwise marginNoMobileMx raggio">
        <div>
          <h2 className="text-center">Home</h2>
          <Image className="rotating-clockwise" height={70} src="/pianeta1.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
