import * as React from "react";

interface Props {
  creator: string;
  title: string;
}

const PodcastPage: React.FC<Props> = (props) => {
  return (
    <div className="podcast_page">
      <h3>{props.creator}</h3>
      <h4>{props.title}</h4>
    </div>
  );
};

export default PodcastPage;
