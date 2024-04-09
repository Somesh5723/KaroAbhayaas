import React from "react";
import "./reviewPage.css";
import Review from "../../component/review/Review";
const ReviewPage = () => {
  return (
    <>
      <h2>Reviews </h2>
      <div className="reviewpage-container">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </>
  );
};

export default ReviewPage;
