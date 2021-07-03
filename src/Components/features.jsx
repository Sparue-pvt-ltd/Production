import React from "react";
import "./ComponentsStyles/features.css";
import png1 from "../images/png1.png";
import png2 from "../images/png2.png";
import png3 from "../images/png3.png";
import png4 from "../images/png4.png";
import png5 from "../images/png5.png";
import png6 from "../images/png6.png";
const Features = () => {
  const data = [
    {
      id: "service-1 service",
      img: png1,
      name: "Managed Cloud Services",
      work:
        "we will help to manage AWS and make sure your solutions work smoothly and efficiently"
    },
    {
      id: "service-2 service",
      img: png2,
      name: "AWS Devops",
      work:
        "DevOps is all about collaboration. We are here to take it to the next level."
    },
    {
      id: "service-3 service",
      img: png3,
      name: "AWS Database migrations",
      work:
        "Database migrations to the cloud is often perceived to be time-consuming and subject to frequent failure but that is simply not true."
    },
    {
      id: "service-4 service",
      img: png4,
      name: "Analytics & Big Data",
      work:
        "Big data services help companies maximize value and achieve business goals with big data analysis."
    },
    {
      id: "service-5 service",
      img: png5,
      name: "Security in the Cloud –AWS",
      work:
        "Are these problems as significant as they seem to be? Of course, not and that is why Sparue has come up with an intelligent enterprise cloud security system."
    },
    {
      id: "service-6 service",
      img: png6,
      name: "Web Development",
      work:
        "One-Stop Solution For a wide range of web development Services Fully Customized & Responsive Website World Class Solutions to Our Valued Customers."
    }
  ];
  return (
    <div className="features container">
      <h3 className="features-heading"> Featured Service That We Provide </h3>{" "}
      <div className="services">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <img src={item.img} alt="" />
                <h3 className="feature-heading"> {item.name} </h3>
                <p className="feature-paragraph"> {item.work} </p>{" "}
              </div>
            );
          })}{" "}
        </div>
      </div>{" "}
    </div>
  );
};
export default Features;
