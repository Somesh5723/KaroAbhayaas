import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <div className="bottom-box">
      <div className="left">
        <div className="company-name">KaroAbhayaas</div>
        <div className="location">112, Electronic City Bangalore, India</div>
      </div>
      <div className="right">
        <p className="text">You Can Contact us</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Footer;
