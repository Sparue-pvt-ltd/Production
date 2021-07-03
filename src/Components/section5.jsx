import React from "react";
import "./ComponentsStyles/Section5.css";
const Section5 = () => {
  return (
    <div className="Client-section ">
      <h3>What Our Client Say's</h3>
      <div className="section-5">
        <div className="left-portion">
          <p className="client-words">
            I have bought more than 10 themes on ThemeForest, and this is the
            first one I review. Wow! Amazing React Theme
            <br />
            <br />
            Jone Doe
            <br />
            Director of Beauty-queen
          </p>
        </div>
        <div className="right-portion">
          <img
            src="https://pluspng.com/img-png/person-thinking-png-hd-thinking-man-png-634.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default Section5;
