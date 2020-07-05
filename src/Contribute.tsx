import * as React from "react";
import ContributeHeader from "./ContributeHeader";
import ContributeCreator from "./ContributeCreator";
import ContributeTitle from "./ContributeTitle";

const Contribute: React.FC = () => {
  return (
    <div>
      <ContributeHeader />
      <ContributeCreator />
      <ContributeTitle />
    </div>
  );
};

export default Contribute;
