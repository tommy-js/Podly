import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";
import ExploreButton from "./ExploreButton";

const NavigationButtons: React.FC = () => {
  return (
    <div id="nav_buttons">
      <Link to="/home">
        <HomeButton />
      </Link>
      <Link to="/profile">
        <ProfileButton />
      </Link>
      <Link to="/explore">
        <ExploreButton />
      </Link>
    </div>
  );
};

export default NavigationButtons;
