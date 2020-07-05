import * as React from "react";
import ContributeHeader from "./ContributeHeader";
import ContributeCreator from "./ContributeCreator";
import ContributeTitle from "./ContributeTitle";

const Contribute: React.FC = () => {
  return (
    <div id="contribute_block">
      <ContributeHeader />
      <div id="contribute_input_block">
        <ContributeCreator />
        <ContributeTitle />
      </div>
    </div>
  );
};

export default Contribute;
