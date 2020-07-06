import React, { useState } from "react";

interface Props {
  checkTitleProp: (title: string) => void;
}

const ContributeTitle: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");

  function checkTitle(inputVal: string) {
    setTitle(inputVal);
    props.checkTitleProp(inputVal);
  }

  return (
    <div id="contribute_title">
      <input
        onChange={(e) => checkTitle(e.target.value)}
        className="input_element"
        type="text"
        placeholder="Title"
      />
    </div>
  );
};

export default ContributeTitle;
