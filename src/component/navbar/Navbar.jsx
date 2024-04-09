import React from "react";
import "./navbar.css";
// import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">KaroAbbhayaas</div>
      <div className="right">
        <div className="menu-item">Classes</div>
        <div className="menu-item">Products</div>
        <div className="menu-item">About us</div>
        <div className="icons">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
