import * as React from "react";
import ProfileHeader from "./ProfileHeader";
import ListenedPodcasts from "./ListenedPodcasts";
import SubmittedReviews from "./SubmittedReviews";

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const ProfilePage: React.FC<Props> = (props) => {
  const userData = {
    username: "Tyler",
  };

  function setId(id: number, creator: string, title: string) {
    props.setIdProps(id, creator, title);
  }

  return (
    <div id="profile_page">
      <ProfileHeader username={userData.username} />
      <ListenedPodcasts setIdProps={setId} />
      <SubmittedReviews />
    </div>
  );
};

export default ProfilePage;
