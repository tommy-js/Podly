import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import Contribute from "./Contribute";
import Discover from "./Discover";

const Homepage: React.FC = () => {
  return (
    <div>
      <HeaderContainer />
      <Contribute />
      <Discover />
    </div>
  );
};

export default Homepage;
