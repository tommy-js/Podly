import React, { useState } from "react";
import DropFromFollowed from "./DropFromFollowed";

interface Props {
  creatorId: number;
}

const ProfileButtons: React.FC<Props> = (props) => {
  return (
    <div>
      <DropFromFollowed creatorId={props.creatorId} />
    </div>
  );
};

export default ProfileButtons;
