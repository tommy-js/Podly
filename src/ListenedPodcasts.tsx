import * as React from "react";
import { Link } from "react-router-dom";
import IndividualDiscoverItem from "./IndividualDiscoverItem";

interface Props {
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const ListenedPodcasts: React.FC<Props> = (props) => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk", score: 4.7, id: 23 },
    { creator: "NPR", title: "December 14, 2020", score: 2.5, id: 239 },
  ];

  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div id="listened_podcasts_page">
      <h2>Podcasts you've listened to</h2>
      {basicData.map((el) => (
        <IndividualDiscoverItem
          creator={el.creator}
          title={el.title}
          score={el.score}
          id={el.id}
          setIdProps={setId}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default ListenedPodcasts;
