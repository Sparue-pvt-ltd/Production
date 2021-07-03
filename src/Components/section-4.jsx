import React from "react";
import "./ComponentsStyles/Section4.css";
const Section4 = () => {
  return (
    <div className="container caseStudy">
      <div className="section-4">
        <h3 className="case-heading"> Case Studies </h3>
        <div className="Images">
          <div className="img-1 img">
            <p className="case-paragraph-1">
              {" "}
              Take the collection of oxford university online{" "}
            </p>{" "}
          </div>{" "}
          <div className="img-2 img">
            <div className="Items">
              <h4> Ubank </h4>{" "}
              <p className="case-paragraph-2">
                Bringing digital banking capabilities to market faster with an
                IBM Cloud solution{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="img-3 img">
            <p className="case-paragraph-3">
              HOW THE UNIVERSITY OF WESTMINSTER UTILISED AMAZON APPSTREAM 2.0 TO
              SECURELY DELIVER GRAPHICAL COMPUTE - INTENSE COURSES REMOTELY–
              CIRRUSHQ{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Section4;
