import * as React from "react";
import IndividualDiscoverItem from "./IndividualDiscoverItem";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

interface Data {
  creator: string;
  title: string;
  id: number;
}

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const DiscoverItems: React.FC<Props> = (props) => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk", id: 23 },
    { creator: "Jim Halpert", title: "Keeping up with Michael Scott", id: 44 },
    { creator: "NPR", title: "December 14, 2020", id: 239 },
  ];

  function setId(id: number, creator: string, title: string) {
    props.setIdProps(id, creator, title);
  }

  return (
    <div>
      {basicData.map((el: Data) => (
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

export default DiscoverItems;
