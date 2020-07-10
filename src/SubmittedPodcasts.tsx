import * as React from "react";
import PodcastPage from "./PodcastPage";

const SubmittedPodcasts: React.FC = () => {
  const exampleData = [
    {
      title: "My first podcast",
      creator: "TommyBoy",
      creatorId: 5,
      score: 1.5,
      length: 12,
      views: 2,
    },
    {
      title: "Podcast 2",
      creator: "TommyBoy",
      creatorId: 5,
      score: 2.2,
      length: 23,
      views: 4,
    },
  ];

  return (
    <div id="submitted_podcasts_page">
      {exampleData.map((el) => (
        <div>
          <PodcastPage
            creator={el.creator}
            title={el.title}
            score={el.score}
            creatorId={el.creatorId}
          />
        </div>
      ))}
    </div>
  );
};

export default SubmittedPodcasts;
