import * as React from "react";

interface Props {
  creator: string;
  title: string;
  review: string;
  score: number;
}

const IndividualSubmittedReview: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>{props.creator}</h3>
      <h2>{props.title}</h2>
      <p>{props.score}</p>
      <p>{props.review}</p>
    </div>
  );
};

export default IndividualSubmittedReview;
