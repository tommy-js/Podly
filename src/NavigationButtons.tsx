import * as React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";
import ExploreButton from "./ExploreButton";
import SigninButton from "./SigninButton";

const NavigationButtons: React.FC = () => {
  return (
    <div id="nav_buttons">
      <NavLink
        exact
        className="navlink_button"
        activeClassName="navlink_button_active"
        to="/home"
      >
        <HomeButton />
      </NavLink>
      <NavLink
        exact
        className="navlink_button"
        activeClassName="navlink_button_active"
        to="/profile"
      >
        <ProfileButton />
      </NavLink>
      <NavLink
        exact
        className="navlink_button"
        activeClassName="navlink_button_active"
        to="/explore"
      >
        <ExploreButton />
      </NavLink>
      <NavLink
        exact
        className="navlink_button"
        activeClassName="navlink_button_active"
        to="/signin"
      >
        <SigninButton />
      </NavLink>
    </div>
  );
};

export default NavigationButtons;
