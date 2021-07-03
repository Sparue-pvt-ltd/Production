import React from "react";
import Banner from "./Banner";
import Features from "./features";
import FeatureSection from "./features-2";
import Blog from "./blog";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section5";

const MainContain = () => {
  return (
    <React.Fragment>
      <Banner />
      <Features />
      <FeatureSection />
      <Blog />
      <Section3 />
      <Section4 />
      <Section5 />
    </React.Fragment>
  );
};
export default MainContain;
