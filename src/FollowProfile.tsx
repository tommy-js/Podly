import * as React from "react";
import CreatorTitle from "./CreatorTitle";
import ProfileButtons from "./ProfileButtons";

interface Props {
  creator: string;
  creatorId: number;
}

const FollowProfile: React.FC<Props> = (props) => {
  return (
    <div>
      <CreatorTitle creator={props.creator} creatorId={props.creatorId} />
      <ProfileButtons creatorId={props.creatorId} />
    </div>
  );
};

export default FollowProfile;
