import React, { useState } from "react";

interface Props {
  checkScoreProp: (score: number) => void;
}

const ContributeScore: React.FC<Props> = (props) => {
  const [score, setScore] = useState(0);

  function modScore(val: string) {
    let key: number = parseInt(val);
    setScore(key);
    props.checkScoreProp(key);
  }

  return (
    <input
      type="number"
      onChange={(e) => modScore(e.target.value)}
      value={score}
      max="5"
      min="0"
    />
  );
};

export default ContributeScore;
