import React from "react";
import "./cardPage.css";
import Card from "../../component/card/Card";
const CardPage = () => {
  return (
    <>
      <h2>Top Students</h2>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardPage;
