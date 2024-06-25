import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex rotating-clockwise marginProjects marginNoMobileMx rotating2 raggio mt-5">
        <div>
          <h2 className="text-center">About Me</h2>
          <Image className="rotating-clockwise" height={120} src="/pianeta3.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
