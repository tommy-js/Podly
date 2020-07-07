import * as React from "react";
import { Link } from "react-router-dom";
import IndividualDiscoverItem from "./IndividualDiscoverItem";

interface Data {
  creator: string;
  title: string;
  id: number;
}

interface Props {
  setIdProps: (id: number, creator: string, title: string) => void;
}

const Explore: React.FC<Props> = (props) => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk", id: 23 },
    { creator: "Jim Halpert", title: "Keeping up with Michael Scott", id: 44 },
    { creator: "NPR", title: "December 14, 2020", id: 239 },
    { creator: "New Cities", title: "The Start", id: 2293 },
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

export default Explore;
