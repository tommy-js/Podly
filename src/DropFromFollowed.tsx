import React from "react";

interface Props {
  creatorId: number;
}

const DropFromFollowed: React.FC<Props> = (props) => {
  function removeFromFollowing() {
    // schema function to remove profile from followed here
  }

  return (
    <div>
      <button onClick={() => removeFromFollowing()}>x</button>
    </div>
  );
};

export default DropFromFollowed;
