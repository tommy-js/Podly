import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import Contribute from "./Contribute";
import Discover from "./Discover";

const Main: React.FC = () => {
  return (
    <div id="main_body_structure">
      <HeaderContainer />
      <Contribute />
      <Discover />
    </div>
  );
};

export default Main;
