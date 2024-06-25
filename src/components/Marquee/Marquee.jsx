import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css";

const MarqueeText = () => {
  return (
    <div className="marquee-container">
      <Marquee gradient={false} speed={150}>
        <p className="marquee-text">Welcome to My Portfolio!</p>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
