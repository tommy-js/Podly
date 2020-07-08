import * as React from "react";
import IndividualSubmittedReview from "./IndividualSubmittedReview";

interface Data {
  creator: string;
  title: string;
  review: string;
  score: number;
}

const SubmittedReviews: React.FC = () => {
  const exampleData = [
    {
      creator: "Joe Rogan",
      title: "Elon Musk",
      review: "Joe Rogan is a good reviewer",
      score: 3.4,
    },
  ];

  return (
    <div>
      <h3>Your submitted reviews</h3>
      {exampleData.map((el: Data) => (
        <div>
          <IndividualSubmittedReview
            creator={el.creator}
            title={el.title}
            review={el.review}
            score={el.score}
          />
        </div>
      ))}
    </div>
  );
};

export default SubmittedReviews;
