// Card.jsx
import React from "react";
import "./card.css";
import image from "../../assets/bg.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Hello</h2>
        <p className="card-description">this side somesh</p>
      </div>
    </div>
  );
};

export default Card;
