import * as React from "react";
import DiscoverTitle from "./DiscoverTitle";
import DiscoverItems from "./DiscoverItems";

interface Props {
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const Discover: React.FC<Props> = (props) => {
  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div id="discover_block">
      <DiscoverItems setIdProps={setId} />
    </div>
  );
};

export default Discover;
