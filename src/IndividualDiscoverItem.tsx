import React, { useEffect } from "react";

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
    <div id="individual_discover_item" onClick={goToLink}>
      <p>{props.creator}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default IndividualDiscoverItem;
