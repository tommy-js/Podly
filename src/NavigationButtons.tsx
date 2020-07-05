import * as React from "react";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";
import ExploreButton from "./ExploreButton";

const NavigationButtons: React.FC = () => {
  return (
    <div id="nav_buttons">
      <HomeButton />
      <ProfileButton />
      <ExploreButton />
    </div>
  );
};

export default NavigationButtons;
