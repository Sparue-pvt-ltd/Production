import React from "react";
import { NavLink } from "react-router-dom";
import png1 from "../../images/png1.png";
import png2 from "../../images/png2.png";
import png3 from "../../images/png3.png";
import png4 from "../../images/png4.png";
import '../ComponentsStyles/ServicesStyles/Links.css'
const Links = () => {
  return (
    <div style={{width: '90%'}} className="links">

        <NavLink style={{padding: "0px", margin: "10px 0px 0px 0px"}} activeClassName="active-menu" to="/Services/managedCloud">
          <div className="d-flex">
            <img width="80px" height="80px" className="my-auto ms-3" src={png1} alt="cloud"></img>
            <h6 className="my-auto nav-link-text">Managed Cloud Services</h6>
          </div>
        </NavLink>
        
        <NavLink style={{padding: "0px", margin: "10px 0px 0px 0px"}} activeClassName="active-menu" to="/Services/AWSdevops">
          <div className="d-flex">
            <img width="80px" height="80px" className="my-auto ms-3" src={png2} alt="cloud"></img>
            <h6 className="my-auto nav-link-text">AWS Devops</h6>
          </div>
        </NavLink>

        <NavLink style={{padding: "0px", margin: "10px 0px 0px 0px"}} activeClassName="active-menu" to="/Services/AWSdatamigration">
          <div className="d-flex">
            <img width="80px" height="80px" className="my-auto ms-3" src={png3} alt="cloud"></img>
            <h6 className="my-auto nav-link-text">AWS DataMigration</h6>
          </div>
        </NavLink>

        <NavLink style={{padding: "0px", margin: "10px 0px 0px 0px"}} activeClassName="active-menu" to="/Services/securityCloud">
          <div className="d-flex">
            <img width="80px" height="80px" className="my-auto ms-3" src={png4} alt="cloud"></img>
            <h6 className="my-auto nav-link-text">Security in Cloud - AWS</h6>
          </div>
        </NavLink>

    </div>
  );
};
export default Links;
