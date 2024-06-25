import React from "react";
import { Image } from "react-bootstrap";
import "./staz.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex space-station raggio">
        <div>
          <h2 className="text-center">Home</h2>
          <Image className="space-station" height={70} src="/staz.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
