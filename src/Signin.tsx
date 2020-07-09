import React, { useState } from "react";
import LoginAccount from "./LoginAccount";
import CreateAccount from "./CreateAccount";

const Signin: React.FC = () => {
  const [isMember, setIsMember] = useState(true);
  const [signinData, setSigninData] = useState({ username: "", password: "" });
  const [createAccountData, setCreateAccountData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function checkIsMember() {
    if (isMember === true) {
      return (
        <LoginAccount
          modSigninUsernameProps={modSigninUsername}
          modSigninPasswordProps={modSigninPassword}
          username={signinData.username}
          password={signinData.password}
        />
      );
    } else {
      return (
        <CreateAccount
          modCreateAccountUsernameProps={modCreateAccountUsername}
          modCreateAccountEmailProps={modCreateAccountEmail}
          modCreateAccountPasswordProps={modCreateAccountPassword}
          username={createAccountData.username}
          email={createAccountData.email}
          password={createAccountData.password}
        />
      );
    }
  }

  function modCreateAccountUsername(username: string) {
    setCreateAccountData({
      username: username,
      email: createAccountData.email,
      password: createAccountData.password,
    });
  }

  function modCreateAccountEmail(email: string) {
    setCreateAccountData({
      username: createAccountData.username,
      email: email,
      password: createAccountData.email,
    });
  }

  function modCreateAccountPassword(password: string) {
    setCreateAccountData({
      username: createAccountData.username,
      email: createAccountData.email,
      password: password,
    });
  }

  function modSigninUsername(username: string) {
    setSigninData({ username: username, password: signinData.password });
  }

  function modSigninPassword(password: string) {
    setSigninData({ username: signinData.username, password: password });
  }

  return (
    <div id="signin_page">
      <label>I am a member</label>
      <input
        type="checkbox"
        checked={isMember}
        onChange={() => setIsMember(!isMember)}
      />
      <div id="account_login_block">{checkIsMember()}</div>
    </div>
  );
};

export default Signin;
