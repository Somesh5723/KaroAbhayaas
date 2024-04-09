import React from "react";
import "./header.css";
import image from "../../assets/bg.jpg";

const Header = () => {
  return (
    <div className="carousel">
      <img className="image" src={image} alt="Image" />
    </div>
  );
};

export default Header;
