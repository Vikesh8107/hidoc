import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Reviews() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <>
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          Your one-stop solution<span className="rw-text-num"> MEDICAL LEARNING & UPDATES</span>
        </p>
        
      </div>
    </div> 
    <div className="review-sections" id="reviews">
      <div className="rw-text-content">
        
        <p className="rw-text-title">
          Get knowledge of the <span className="rw-text-num"> APPROVED DRUGS</span>
          <button
            className="text-appointment-btn"
            style={{marginRight: "136px",marginLeft:'63px',width:'20%',color:'#000000',background:'#e0eaf2',border: '1px solid transparent'}}
            type="button"
          >
            Enter drug type
            <FontAwesomeIcon style={{marginLeft:'96px'}} icon={faMagnifyingGlass} />{" "}
          </button>
        </p>
        
      </div>
    </div>
    </>
  );
}

export default Reviews;
