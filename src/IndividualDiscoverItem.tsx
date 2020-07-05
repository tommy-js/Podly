import * as React from "react";

interface Props {
  creator: string;
  title: string;
}

const IndividualDiscoverItem: React.FC<Props> = (props) => {
  return (
    <div id="individual_discover_item">
      <p>{props.creator}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default IndividualDiscoverItem;
