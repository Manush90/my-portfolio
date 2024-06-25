import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex mx-2">
        <div>
          <h2 className="text-center mb-3">Projects</h2>
          <Image className="rotating pianeta-image" height={110} src="/pianeta2.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
