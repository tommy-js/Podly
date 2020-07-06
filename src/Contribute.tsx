import React, { useState, useEffect } from "react";
import ContributeHeader from "./ContributeHeader";
import ContributeCreator from "./ContributeCreator";
import ContributeTitle from "./ContributeTitle";

const Contribute: React.FC = () => {
  const [minHeight, setMinHeight] = useState(true);
  const [blockHeight, setBlockHeight] = useState("100px");
  const [creatorInput, setCreatorInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  useEffect(() => {
    if (creatorInput || titleInput) {
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

  function checkTitle(titleVal: string) {
    setTitleInput(titleVal);
  }

  return (
    <div id="contribute_block" style={{ height: blockHeight }}>
      <ContributeHeader />
      <div id="contribute_input_block">
        <ContributeCreator checkCreatorProp={checkCreator} />
        <ContributeTitle checkTitleProp={checkTitle} />
      </div>
    </div>
  );
};

export default Contribute;
