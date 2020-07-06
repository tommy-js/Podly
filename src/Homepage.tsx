import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import Contribute from "./Contribute";
import Discover from "./Discover";

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const Homepage: React.FC<Props> = (props) => {
  function setId(id: number, creator: string, title: string) {
    props.setIdProps(id, creator, title);
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
