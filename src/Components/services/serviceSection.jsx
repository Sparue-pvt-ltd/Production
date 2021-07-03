import React from "react";
import AWS from "./AWS";

import ServiceBanner from "../grid/section-1";

const ServiceSection = () => {
  return (
    <>
      <ServiceBanner content="Security in cloud-AWS" />
      <AWS />
    </>
  );
};
export default ServiceSection;
