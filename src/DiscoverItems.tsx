import * as React from "react";
import IndividualDiscoverItem from "./IndividualDiscoverItem";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

const DiscoverItems: React.FC<Props> = (props) => {
  const basicData = [
    {
      creator: "Joe Rogan",
      title: "Elon Musk",
      length: 201,
      views: 1030294,
      score: 4.6,
      id: 23,
    },
    {
      creator: "Jim Halpert",
      title: "Keeping up with Michael Scott",
      length: 123,
      views: 1934,
      score: 3.5,
      id: 44,
    },
    {
      creator: "NPR",
      title: "December 14, 2020",
      length: 32,
      views: 203482,
      score: 1.6,
      id: 239,
    },
  ];

  function setId(id: number, creator: string, title: string, score: number) {
    props.setIdProps(id, creator, title, score);
  }

  return (
    <div>
      {basicData.map((el: Data) => (
        <IndividualDiscoverItem
          creator={el.creator}
          title={el.title}
          id={el.id}
          score={el.score}
          setIdProps={setId}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default DiscoverItems;
