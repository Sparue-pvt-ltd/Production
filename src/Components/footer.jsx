import React from "react";
import { footerLinks1, footerLinks2, footerLinks3 } from "./footerSubLinks";
import logo from "../sparue_white_text.png";
import "./ComponentsStyles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="item-1 f-item">
          <img src={logo} alt="img-logo" />
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <div className="Address-bar">
            <p className="address">
              Address: Hi-Tech City, Hyderabad, Telangana,India, 500047
            </p>
            <p className="mail">Mail: contact@sparue.com</p>
          </div>
        </div>
        <div className="item-2 f-item">
          <h4 className="heading4">About Us</h4>
          <div className="nav-list">
            <ul className="sub-footer">
              {footerLinks1.map((item) => {
                return (
                  <li className="footer-item" key={item.id}>
                    <a className="footer-link" href="/">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="item3 f-item">
          <h4 className="heading4">Quick Links</h4>
          <div className="nav-list">
            <ul className="sub-footer">
              {footerLinks2.map((item) => {
                return (
                  <li className="footer-item" key={item.id}>
                    <a className="footer-link" href="/">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="item-4 f-item">
          <h4 className="heading4">Services</h4>
          <div className="nav-list">
            <ul className="sub-footer">
              {footerLinks3.map((item) => {
                return (
                  <li className="footer-item" key={item.id}>
                    <a className="footer-link" href="/">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
