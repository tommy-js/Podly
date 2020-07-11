import React, { useState, useEffect } from "react";
import PodcastPage from "./PodcastPage";

const AltUserPodcasts: React.FC = () => {
  const [checkPodcasts, setCheckPodcasts] = useState(false);
  const [data] = useState([
    {
      creator: "test creator",
      title: "test title",
      score: 1,
      creatorId: 22,
    },
  ]);

  useEffect(() => {
    // query for user uploaded podcasts here
  }, []);

  useEffect(() => {
    if (data) {
      setCheckPodcasts(true);
    }
  }, [data]);

  function postPodcasts() {
    if (checkPodcasts) {
      return (
        <div>
          {data.map((el: any) => (
            <PodcastPage
              creator={el.creator}
              title={el.title}
              score={el.score}
              creatorId={el.creatorId}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div>{postPodcasts()}</div>;
};

export default AltUserPodcasts;
