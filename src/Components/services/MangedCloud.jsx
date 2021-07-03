import React from "react";
import Overview from "../grid/overview";
import Image from "../grid/Image";
import Links from "../grid/Links";
import ChooseTemplate from "../grid/choose";
import Contact from "../grid/contact";
import Brochure from "../grid/brochure";
import data from "./managedcloud";
import ServiceBanner from "../grid/section-1";
import "../ComponentsStyles/ServicesStyles/datamigration.css";
const ManagedCloud = () => {
  const content =
    "we will help to manage AWS and make sure your solutions work smoothly and efficiently so that your cloud infrastructure is up and running in the most cost effective way. We help’s to reduce your operational overhead and risk and automates common activities, such as change requests, monitoring, patch management, security, and backup services, and provides full-lifecycle services to provision, run, and support your infrastructure. We will  make unburdens you from infrastructure operations so you can direct resources toward differentiating your business";
  return (
    <React.Fragment>
      <ServiceBanner  content="Managed Cloud Services" />
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
export default ManagedCloud;
