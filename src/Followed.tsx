import React, { useState } from "react";
import FollowProfile from "./FollowProfile";

const Followed: React.FC = () => {
  // This component lists out all the profiles you've followed and gives you the option
  // to unfollow or view their profile

  const exampleData = [{ creator: "TommyBoy", creatorId: 22 }];

  return (
    <div>
      <h2>Following</h2>
      {exampleData.map((el) => (
        <FollowProfile creator={el.creator} creatorId={el.creatorId} />
      ))}
    </div>
  );
};

export default Followed;
