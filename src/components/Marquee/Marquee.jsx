import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css";

const MarqueeText = () => {
  return (
    <div className="marquee-container text-center marginBottomm">
      <p className="marquee-text m-0">.::Welcome to my portfolio::. </p>
      <hr className="m-0"></hr>
      <Marquee
        gradient={false}
        speed={90}
        delay={0}
        loop={0}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <h5 className="marquee-text m-0">&nbsp;Manuel Dell'Oste - FrontEnd Developer&nbsp;</h5>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
