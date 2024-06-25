import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css";

const MarqueeText = () => {
  return (
    <div className="marquee-container">
      <Marquee gradient={false} speed={30}>
        <p className="marquee-text m-0">.::Welcome::. </p>
      </Marquee>
      <Marquee gradient={false} speed={50}>
        <p className="marquee-text m-0">-You are just arrived at Manuel's Portfolio- </p>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
