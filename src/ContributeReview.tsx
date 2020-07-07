import React, { useState } from "react";

interface Props {
  checkReviewProp: (review: string) => void;
}

const ContributeReview: React.FC<Props> = (props) => {
  const [review, setReview] = useState("");

  function checkReview(val: string) {
    setReview(val);
    props.checkReviewProp(val);
  }

  return (
    <textarea
      id="frontpage_review"
      onChange={(e) => checkReview(e.target.value)}
      placeholder="Review..."
    ></textarea>
  );
};

export default ContributeReview;
