import React, { useState } from "react";

const SubmitReview: React.FC = () => {
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [reviewEntry, setReviewEntry] = useState("");
  const [reviewScore, setReviewScore] = useState(0);

  function modScoreEntry(val: string) {
    let key = parseInt(val);
    setReviewScore(key);
  }

  function checkIfReviewSubmitted() {
    if (isReviewSubmitted === false) {
      return (
        <div>
          <h2>Submit a review:</h2>
          <input
            type="text"
            placeholder="Review..."
            value={reviewEntry}
            onChange={(e) => setReviewEntry(e.target.value)}
          />
          <label>Score</label>
          <input
            type="number"
            value={reviewScore}
            onChange={(e) => modScoreEntry(e.target.value)}
          />
          <button onClick={() => setIsReviewSubmitted(true)}>Submit</button>
        </div>
      );
    } else {
      return (
        <div id="personal_review">
          <h2>Your review:</h2>
          <h3>{reviewScore}</h3>
          <p>{reviewEntry}</p>
          <button onClick={() => setIsReviewSubmitted(false)}>edit</button>
        </div>
      );
    }
  }

  return <div>{checkIfReviewSubmitted()}</div>;
};

export default SubmitReview;
