import React, { useState } from "react";

const NewAccount: React.FC = () => {
  const [purposeSelect, setPurposeSelect] = useState(true);

  return (
    <div id="new_account_setup_block">
      <h1>Welcome!</h1>
      <h3>Just a few things before you get started...</h3>
      <h4>Is this a personal or business account?</h4>
      <form onChange={() => setPurposeSelect(!purposeSelect)}>
        <input
          type="radio"
          id="personal"
          value="personal"
          checked={purposeSelect}
        />
        <label>Personal account</label>
        <ul>
          <li>Your account represents you personally.</li>
        </ul>
        <input
          type="radio"
          id="business"
          value="business"
          checked={!purposeSelect}
        />
        <label>Business account</label>
        <ul>
          <li>Your acount represents an organization or brand.</li>
        </ul>
      </form>
    </div>
  );
};

export default NewAccount;
