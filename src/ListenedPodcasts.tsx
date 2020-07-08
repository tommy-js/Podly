import * as React from "react";
import { Link } from "react-router-dom";
import IndividualDiscoverItem from "./IndividualDiscoverItem";

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const ListenedPodcasts: React.FC<Props> = (props) => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk", id: 23 },
    { creator: "NPR", title: "December 14, 2020", id: 239 },
  ];

  function setId(id: number, creator: string, title: string) {
    props.setIdProps(id, creator, title);
  }

  return (
    <div>
      <h2>Podcasts you've listened to</h2>
      {basicData.map((el) => (
        <Link key={el.id} to={`/${el.id}`}>
          <IndividualDiscoverItem
            creator={el.creator}
            title={el.title}
            id={el.id}
            setIdProps={setId}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListenedPodcasts;
