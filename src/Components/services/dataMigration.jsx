import React from "react";
import Overview from "../grid/overview";
import Image from "../grid/Image";
import Links from "../grid/Links";
import ChooseTemplate from "../grid/choose";
import data from "./datamigrationdata";
import Contact from "../grid/contact";
import Brochure from "../grid/brochure";
import ServiceBanner from "../grid/section-1";
import "../ComponentsStyles/ServicesStyles/datamigration.css";
const DataMigration = () => {
  const content =
    "Database migrations to the cloud is often perceived to be time-consuming and subject to frequent failure but that is simply not true. With Sparue’s in-house expertise on CloudMigration and Database Migration Services you can now successfully migrate your databases along with the application stack to AWS cloud easily and quickly. we know the ins and outs of migrating databases and moving data with DMS. We have implemented lift-and-shift database migrations for multiple of our Customers with zero downtime You can now also migrate just the Data of an application across different platforms and across different OS versions without having to carry out a full migration.";
  return (
    <React.Fragment>
      <ServiceBanner content="Data Migration-AWS" />
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
        <div className="Grid Grid-5  grid-data">
          <ChooseTemplate data={data} />
        </div>
        <div className="Grid Grid-6">
          <Brochure />
        </div>
      </div>
    </React.Fragment>
  );
};
export default DataMigration;
