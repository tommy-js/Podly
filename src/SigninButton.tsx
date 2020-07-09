import React, { useState } from "react";

const SigninButton: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  function checkLoggedIn() {
    if (loggedIn === true) {
      return <h3>Log Out</h3>;
    } else {
      return <h3>Log In</h3>;
    }
  }

  return <div className="individual_nav_button">{checkLoggedIn()}</div>;
};

export default SigninButton;
