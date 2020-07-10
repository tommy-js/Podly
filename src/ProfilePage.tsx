import * as React from "react";
import ProfileHeader from "./ProfileHeader";
import ListenedPodcasts from "./ListenedPodcasts";
import SubmittedReviews from "./SubmittedReviews";
import SubmittedPodcasts from "./SubmittedPodcasts";

interface Props {
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const ProfilePage: React.FC<Props> = (props) => {
  const userData = {
    username: "Tyler",
  };

  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div id="profile_page">
      <ProfileHeader username={userData.username} />
      <SubmittedPodcasts />
      <ListenedPodcasts setIdProps={setId} />
      <SubmittedReviews />
    </div>
  );
};

export default ProfilePage;
