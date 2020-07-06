import React, { useEffect } from "react";

interface Props {
  creator: string;
  title: string;
  id: number;
  setIdProps: (id: number) => void;
}

const IndividualDiscoverItem: React.FC<Props> = (props) => {
  function goToLink() {
    props.setIdProps(props.id);
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
