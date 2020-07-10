import React from "react";

interface Props {
  review: string;
  reviewer: string;
  reviewerId: number;
  score: number;
}

const Review: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>{props.reviewer}</h3>
      <p>{props.review}</p>
      <h4>{props.score}</h4>
    </div>
  );
};

export default Review;
