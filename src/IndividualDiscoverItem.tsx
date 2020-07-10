import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import history from "./history";

interface Props {
  creator: string;
  title: string;
  id: number;
  score: number;
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const IndividualDiscoverItem: React.FC<Props> = (props) => {
  function goToLink() {
    props.setIdProps(props.id, props.creator, props.title, props.score);
    history.push(`/${props.id}`);
    console.log(props.id);
  }

  return (
    <div id="individual_discover_item">
      <div id="individual_discover_container" onClick={goToLink}>
        <p>{props.creator}</p>
        <p>{props.title}</p>
      </div>
      <ReactAudioPlayer className="player" autoPlay controls />
    </div>
  );
};

export default IndividualDiscoverItem;
