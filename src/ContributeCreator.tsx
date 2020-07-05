import React, { useState } from "react";

const ContributeCreator: React.FC = () => {
  const [creator, setCreator] = useState("");
  return (
    <div id="contribute_creator">
      <input
        onChange={(e) => setCreator(e.target.value)}
        className="input_element"
        type="text"
        placeholder="Creator"
      />
    </div>
  );
};

export default ContributeCreator;
