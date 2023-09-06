import './StarRatingComponentStyles.scss';
import React from "react";
import StarRatingComponentProps from "./StarRatingComponentProps";
import Icons from '../../assets/Icons';

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({ rating }) => {

  return <div className="star_rating_component">{
    [...Array(5)].map((_, index) => <div className="d-flex align-items-center me-1" key={index}>
      {(index + 0.5) > rating ? 
        <Icons.StarEmpty />
      : ((index + 1) <= rating ? <Icons.StarFull /> : <Icons.StarHalf />)}
    </div>)
  }
  </div>;
};

export default StarRatingComponent;
