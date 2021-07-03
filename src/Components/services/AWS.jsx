import React from "react";
import Overview from "../grid/overview";
import Image from "../grid/Image";
import Links from "../grid/Links";
import Contact from "../grid/contact";
import Card from "../grid/card";
import Brochure from "../grid/brochure";
import "../ComponentsStyles/ServicesStyles/AWS.css";
const AWS = () => {
  const content =
    "Are these problems as significant as they seem to be ? Of course, not and that is why Sparue has come up with an intelligent enterprise cloud security system.We understand the complete working of cloud security, and we have covered all the essential domains of it which include ";
  return (
    <div style={{width: "100%"}} className="Grid-container mx-auto">
      <div className="Grid Grid-1">
        <Image />
      </div>
      <div className="Grid Grid-2">
        <Links />
      </div>
      <div className="Grid Grid-3 Grid-overview">
        <Overview content={content} />
      </div>
      <div className="Grid Grid-4">
        <Contact />
      </div>
      <div className="Grid Grid-5">
        <Card />
      </div>
      <div className="Grid Grid-6">
        <Brochure />
      </div>
    </div>
  );
};
export default AWS;
