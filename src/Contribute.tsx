import React, { useState, useEffect } from "react";
import ContributeHeader from "./ContributeHeader";
import ContributeCreator from "./ContributeCreator";
import ContributeTitle from "./ContributeTitle";
import ContributeScore from "./ContributeScore";
import ContributeReview from "./ContributeReview";
import ContributeSubmit from "./ContributeSubmit";

const Contribute: React.FC = () => {
  const [minHeight, setMinHeight] = useState(true);
  const [blockHeight, setBlockHeight] = useState("100px");
  const [creatorInput, setCreatorInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [scoreInput, setScoreInput] = useState(0);
  const [reviewInput, setReviewInput] = useState("");

  useEffect(() => {
    if (creatorInput || titleInput) {
      setMinHeight(false);
      setBlockHeight("350px");
    } else {
      setMinHeight(true);
      setBlockHeight("100px");
    }
  });

  function checkCreator(creatorVal: string) {
    setCreatorInput(creatorVal);
  }

  function checkTitle(titleVal: string) {
    setTitleInput(titleVal);
  }

  function checkScore(score: number) {
    setScoreInput(score);
  }

  function checkReview(review: string) {
    setReviewInput(review);
  }

  return (
    <div id="contribute_block" style={{ height: blockHeight }}>
      <ContributeHeader />
      <div id="contribute_input_block">
        <ContributeCreator checkCreatorProp={checkCreator} />
        <ContributeTitle checkTitleProp={checkTitle} />
      </div>
      <div id="score_block">
        <ContributeScore checkScoreProp={checkScore} />
      </div>
      <div id="review_block">
        <ContributeReview checkReviewProp={checkReview} />
      </div>
      <div id="submit_review">
        <ContributeSubmit />
      </div>
    </div>
  );
};

export default Contribute;
