import * as React from "react";
import NavInput from "./NavInput";
import NavGo from "./NavGo";

const SearchContainer: React.FC = () => {
  return (
    <div id="search_container">
      <NavInput />
      <NavGo />
    </div>
  );
};

export default SearchContainer;
