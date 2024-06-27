import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css";

const MarqueeText = () => {
  return (
    <div className="marquee-container text-center marginBottomm">
      <p className="marquee-text m-0">.::Welcome totmy portfolio::. </p>
      <hr className="m-0"></hr>
      <Marquee
        gradient={false}
        speed={90}
        delay={0}
        loop={0}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <h5 className="marquee-text m-0">Manuel Dell'Oste - FrontEnd Developer</h5>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
