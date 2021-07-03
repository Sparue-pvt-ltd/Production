import React from "react";
import Overview from "../grid/overview";
import Image from "../grid/Image";
import Links from "../grid/Links";
import ChooseTemplate from "../grid/choose";
import Contact from "../grid/contact";
import Brochure from "../grid/brochure";
import data from "./awsdata";
import ServiceBanner from "../grid/section-1";
import "../ComponentsStyles/ServicesStyles/datamigration.css";
const AWSDevOPs = () => {
  const content =
    "DevOps is all about collaboration. We are here to take it to the next level. We provide comprehensive AWS DevOps services to supercharge processes between your software development and IT operations teams. DevOps is the culture of improving collaboration between developers and operations. It comprises a range of automated processes after developers have written code, including: Testing infrastructure   Deployment strategy  Infrastructure automation  Monitoring and scaling infrastructure For DevOps on AWS, businesses need serious experience in cloud computing. That’s why it’s almost essential to have an AWS DevOps professionals. And that’s exactly where Sparue comes in. We have over a decade of experience across the board in cloud computing, meaning we are perfectly placed to assist in your AWS DevOps.";
  return (
    <React.Fragment>
      <ServiceBanner content="AWS DevOps" />
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
        <div className="Grid Grid-5 grid-data">
          <ChooseTemplate data={data} />
        </div>
        <div className="Grid Grid-6">
          <Brochure />
        </div>
      </div>
    </React.Fragment>
  );
};
export default AWSDevOPs;
