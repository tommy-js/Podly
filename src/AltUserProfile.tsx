import * as React from "react";
import AltUserPodcasts from "./AltUserPodcasts";

interface Props {
  creator: string;
}

const AltUserProfile: React.FC<Props> = (props) => {
  return (
    <div id="alt_user_profile">
      <h2>{props.creator}</h2>
      <AltUserPodcasts />
    </div>
  );
};

export default AltUserProfile;
