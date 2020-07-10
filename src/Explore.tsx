import * as React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import DiscoverTitle from "./DiscoverTitle";
import IndividualDiscoverItem from "./IndividualDiscoverItem";

interface Data {
  creator: string;
  title: string;
  score: number;
  id: number;
}

interface Props {
  setIdProps: (
    id: number,
    creator: string,
    title: string,
    score: number
  ) => void;
}

const Explore: React.FC<Props> = (props) => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk", score: 4.7, id: 23 },
    {
      creator: "Jim Halpert",
      title: "Keeping up with Michael Scott",
      score: 1.8,
      id: 44,
    },
    { creator: "NPR", title: "December 14, 2020", score: 3.6, id: 239 },
    { creator: "New Cities", title: "The Start", score: 2.5, id: 2293 },
  ];

  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div id="explore_page">
      <HeaderContainer />
      <DiscoverTitle />
      {basicData.map((el: Data) => (
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

export default Explore;
