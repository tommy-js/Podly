import React, { useState } from "react";

const NavInput: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      className="input_element"
      type="text"
      placeholder="Search"
    />
  );
};

export default NavInput;
