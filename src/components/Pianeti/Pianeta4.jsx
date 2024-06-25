import React from "react";
import { Image } from "react-bootstrap";
import "./pianeti.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex mx-2">
        <div>
          <h2 className="text-center mb-3">Contacts</h2>
          <Image className="rotating pianeta-image" height={110} src="/pianeta5.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
