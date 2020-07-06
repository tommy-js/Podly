import React, { useState } from "react";

interface Props {
  checkCreatorProp: (creator: string) => void;
}

const ContributeCreator: React.FC<Props> = (props) => {
  const [creator, setCreator] = useState("");

  function checkCreator(val: string) {
    setCreator(val);
    props.checkCreatorProp(val);
  }

  return (
    <div id="contribute_creator">
      <input
        onChange={(e) => checkCreator(e.target.value)}
        className="input_element"
        type="text"
        placeholder="Creator"
      />
    </div>
  );
};

export default ContributeCreator;
