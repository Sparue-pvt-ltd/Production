import React from "react";

import ServiceBanner from "../grid/section-1";
import "./caseStudycss/caseStudy.css";

const CaseStudy = () => {
  const images = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      img:
        "https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <React.Fragment>
      <ServiceBanner content="Security in Cloud-AWS" />
      <div className="grid-case">
        {images.map((item) => {
          return (
            <div key={item.id} className="case-img">
              <img src={item.img} alt="img" />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default CaseStudy;
