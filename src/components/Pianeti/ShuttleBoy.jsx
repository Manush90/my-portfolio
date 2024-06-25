import React from "react";
import { Image } from "react-bootstrap";
import "./shuttleBoy.css";

const MyComponent = () => {
  return (
    <>
      <div className="d-flex shuttleBoy raggio">
        <div>
          <Image height={270} src="/ShuttleBoy.png" rounded />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
