import * as React from "react";
import Contribute from "./Contribute";
import Discover from "./Discover";

interface Props {
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const Homepage: React.FC<Props> = (props) => {
  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div id="homepage">
      <Contribute />
      <Discover setIdProps={setId} />
    </div>
  );
};

export default Homepage;
