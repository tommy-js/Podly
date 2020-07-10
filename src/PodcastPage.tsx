import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Review from "./Review";
import SubmitReview from "./SubmitReview";

interface Props {
  creator: string;
  title: string;
  score: number;
  creatorId: number;
}

const PodcastPage: React.FC<Props> = (props) => {
  const [checkUserProfile, setCheckUserProfile] = useState(5);
  // this data will come from a query and hence be different on each load. For now
  // data on each page remains the same for documentation purposes.
  const exampleData = [
    {
      review:
        "Rogan once again shows why he is such a well-received interviewer on the internet.",
      reviewer: "JamesTom223",
      reviewerId: 5,
      score: 4.5,
    },
    {
      review:
        "Elon Musk is surely a meglomaniac, as self-absorbed as ever. Still, it's a decent interview, and a somewhat interesting waste of two hours.",
      reviewer: "33dsd",
      reviewerId: 23,
      score: 3.3,
    },
    {
      review: "Trash",
      reviewer: "NPR",
      reviewerId: 2393,
      score: 0,
    },
  ];

  function checkUser() {
    if (checkUserProfile != props.creatorId) {
      return (
        <div>
          <SubmitReview />
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="podcast_page">
      <h3>{props.creator}</h3>
      <h4>{props.title}</h4>
      <ReactAudioPlayer className="player" autoPlay controls />
      {checkUser()}
      <h3>Reviews, {props.score}</h3>
      {exampleData.map((el) => (
        <Review
          review={el.review}
          reviewer={el.reviewer}
          reviewerId={el.reviewerId}
          score={el.score}
        />
      ))}
    </div>
  );
};

export default PodcastPage;
