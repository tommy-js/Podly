import * as React from "react";
import NavigationButtons from "./NavigationButtons";
import SearchContainer from "./SearchContainer";

const Navbar: React.FC = () => {
  return (
    <div id="navbar">
      <NavigationButtons />
      <SearchContainer />
    </div>
  );
};

export default Navbar;
