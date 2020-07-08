import * as React from "react";

interface Props {
  username: string;
}

const ProfileHeader: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.username}</h2>
    </div>
  );
};

export default ProfileHeader;
