import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex rotating-clockwise marginNoMobileMx rotating2 raggio">
        <div>
          <h2 className="text-center">Contacts</h2>
          <Image className="rotating-clockwise" height={50} src="/pianeta4.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
