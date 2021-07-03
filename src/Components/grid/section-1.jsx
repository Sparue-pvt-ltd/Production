import React from "react";
import "../ComponentsStyles/ServicesStyles/section1.css";
const ServiceBanner = (props) => {
  return (
    <div className="serviceBanner">
      <h1> {props.content} </h1>{" "}
    </div>
  );
};
export default ServiceBanner;
