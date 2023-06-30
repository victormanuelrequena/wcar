import './StarRatingComponentStyles.scss';
import React from "react";
import StarRatingComponentProps from "./StarRatingComponentProps";

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({ rating }) => {

  return <div className="star_rating_component">{
    [...Array(5)].map((_, index) => <img key={index} src={index < Math.floor(rating) ? '/assets/icons/star_rating.svg' : '/assets/icons/star_clear.svg'} alt="" className="img-fluid img_star me-1" />)
  }
  </div>;
};

export default StarRatingComponent;
