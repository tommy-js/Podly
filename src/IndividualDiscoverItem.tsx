import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

interface Props {
  creator: string;
  title: string;
  id: number;
  setIdProps: (id: number, creator: string, title: string) => void;
}

const IndividualDiscoverItem: React.FC<Props> = (props) => {
  function goToLink() {
    props.setIdProps(props.id, props.creator, props.title);
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
