import * as React from "react";
import DiscoverTitle from "./DiscoverTitle";
import DiscoverItems from "./DiscoverItems";

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const Discover: React.FC<Props> = (props) => {
  function setId(id: number, creator: string, title: string) {
    props.setIdProps(id, creator, title);
  }

  return (
    <div id="discover_block">
      <DiscoverTitle />
      <DiscoverItems setIdProps={setId} />
    </div>
  );
};

export default Discover;
