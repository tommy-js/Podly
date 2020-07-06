import React, { useState, useEffect } from "react";
import ContributeHeader from "./ContributeHeader";
import ContributeCreator from "./ContributeCreator";
import ContributeTitle from "./ContributeTitle";

const Contribute: React.FC = () => {
  const [minHeight, setMinHeight] = useState(true);
  const [blockHeight, setBlockHeight] = useState("100px");
  const [creatorInput, setCreatorInput] = useState("");

  useEffect(() => {
    if (creatorInput) {
      setMinHeight(false);
      setBlockHeight("150px");
    } else {
      setMinHeight(true);
      setBlockHeight("100px");
    }
  });

  function checkCreator(creatorVal: string) {
    setCreatorInput(creatorVal);
  }

  return (
    <div id="contribute_block" style={{ height: blockHeight }}>
      <ContributeHeader />
      <div id="contribute_input_block">
        <ContributeCreator checkCreatorProp={checkCreator} />
        <ContributeTitle />
      </div>
    </div>
  );
};

export default Contribute;
