import React, { useState } from "react";
import history from "./history";

interface Props {
  modCreateAccountUsernameProps: (username: string) => void;
  modCreateAccountEmailProps: (email: string) => void;
  modCreateAccountPasswordProps: (password: string) => void;
  username: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC<Props> = (props) => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  function changeUsername(username: string) {
    setUsername(username);
    props.modCreateAccountUsernameProps(username);
  }

  function changeEmail(email: string) {
    setEmail(email);
    props.modCreateAccountEmailProps(email);
  }

  function changePassword(password: string) {
    setPassword(password);
    props.modCreateAccountPasswordProps(password);
  }

  function pushToRoot() {
    history.push("/newaccount");
  }

  return (
    <div>
      <h3>Create Your Account</h3>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => changeUsername(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => changePassword(e.target.value)}
      />
      <button onClick={() => pushToRoot()}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
