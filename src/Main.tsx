import * as React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

const Main: React.FC = () => {
  return (
    <div id="main_body_structure">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default Main;
