import React from "react";
import "./ComponentsStyles/FeatureSection2.css";
const FeatureSection = () => {
  const icons = [
    {
      id: "item-1",
      Class: "fas fa-server",
      data: "Enterprise - Class equipment"
    },
    {
      id: "item-2",
      Class: "fas fa-chart-line",
      data: "Break-through performance"
    },
    {
      id: "item-3",
      Class: "fas fa-user-lock",
      data: "Enhanced security"
    },
    {
      id: "item-4",
      Class: "fas fa-globe",
      data: "Broad geopositioning"
    }
  ];
  return (
    <div className="Section-2">
      <div className="FeatureSection-left ">
        <div className="gr-1"></div>
        <div className="gr-2"></div>
        <div className="gr-3"></div>
        {/* <img
          src="https://images.unsplash.com/photo-1573497019414-e44d0759d00e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1607970420862-385a245239a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        /> */}
      </div>
      <div className="right">
        <h2 className="featureSection-heading">
          Innovative Cloud Solutions to implement incredible ideas.
        </h2>
        <p className="featureSection-text">
          Sparue is an ideal online Сloud IT infrastructure rental service. Our
          service lets you configure and deploy virtual servers, configure
          network circuits, order SSL certificates, administer domain zones and
          monitoring.
        </p>
        <div className="wrapper">
          <div className="icon">
            {icons.map((item) => {
              return (
                <div className="icon-feature">
                  <i className={item.Class}></i>
                  <p>{item.data}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="feature-btn-1">Discover Items</button>
      </div>
    </div>
  );
};
export default FeatureSection;
