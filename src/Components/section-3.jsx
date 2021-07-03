import React from "react";
import "./ComponentsStyles/Section3.css";
import png7 from "../images/png7.png";
const Section3 = () => {
  return (
    <div className="section3">
      <div className="inner-container">
        <h3 className="section3-heading">
          Our Quality feature that customers always prefer to use on their
          products.
        </h3>
        <img className="Featured-img" src={png7} alt="img" />
      </div>
    </div>
  );
};
export default Section3;
