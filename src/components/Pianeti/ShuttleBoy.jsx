import React from "react";
import { Image } from "react-bootstrap";
import "./shuttleBoy.css";

const ShuttleBoy = () => {
  return (
    <div className="shuttleBoy-container">
      <div className="d-flex shuttleBoy justify-content-center mt-5">
        <div>
          <Image className="bigShip shuttle-image" height={250} src="/ShuttleBoy.png" rounded />
        </div>
      </div>
    </div>
  );
};

export default ShuttleBoy;
