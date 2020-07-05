import React, { useState } from "react";

const ContributeTitle: React.FC = () => {
  const [title, setTitle] = useState("");

  return (
    <div id="contribute_title">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="input_element"
        type="text"
        placeholder="Title"
      />
    </div>
  );
};

export default ContributeTitle;
