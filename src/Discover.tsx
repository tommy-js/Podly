import * as React from "react";
import DiscoverTitle from "./DiscoverTitle";
import DiscoverItems from "./DiscoverItems";

const Discover: React.FC = () => {
  return (
    <div id="discover_block">
      <DiscoverTitle />
      <DiscoverItems />
    </div>
  );
};

export default Discover;
