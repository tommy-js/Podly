import * as React from "react";
import DiscoverTitle from "./DiscoverTitle";
import DiscoverItems from "./DiscoverItems";

interface Props {
  setIdProps: (id: number) => void;
}

const Discover: React.FC<Props> = (props) => {
  function setId(id: number) {
    props.setIdProps(id);
  }

  return (
    <div id="discover_block">
      <DiscoverTitle />
      <DiscoverItems setIdProps={setId} />
    </div>
  );
};

export default Discover;
