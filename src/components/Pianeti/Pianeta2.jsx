import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex rotating-counterclockwise marginNoMobileMx marginProject rotating2 raggio mb-5">
        <div>
          <h2 className="text-center">Projects</h2>
          <Image className="rotating-counterclockwise" height={110} src="/pianeta2.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
