import React, { useState } from "react";
import history from "./history";

interface Props {
  modSigninUsernameProps: (username: string) => void;
  modSigninPasswordProps: (password: string) => void;
  username: string;
  password: string;
}

const LoginAccount: React.FC<Props> = (props) => {
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);

  function changeUsername(username: string) {
    setUsername(username);
    props.modSigninUsernameProps(username);
  }

  function changePassword(password: string) {
    setPassword(password);
    props.modSigninPasswordProps(password);
  }

  function pushToRoot() {
    history.push("/home");
  }

  return (
    <div>
      <h3>Log In</h3>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => changeUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => changePassword(e.target.value)}
      />
      <button onClick={() => pushToRoot()}>Log In</button>
    </div>
  );
};

export default LoginAccount;
