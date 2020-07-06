import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import Contribute from "./Contribute";
import Discover from "./Discover";

interface Props {
  setIdProps: (id: number) => void;
}

const Homepage: React.FC<Props> = (props) => {
  function setId(id: number) {
    props.setIdProps(id);
  }

  return (
    <div>
      <HeaderContainer />
      <Contribute />
      <Discover setIdProps={setId} />
    </div>
  );
};

export default Homepage;
