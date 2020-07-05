import * as React from "react";
import IndividualDiscoverItem from "./IndividualDiscoverItem";

interface Data {
  creator: string;
  title: string;
}

const DiscoverItems: React.FC = () => {
  const basicData = [
    { creator: "Joe Rogan", title: "Elon Musk" },
    { creator: "Jim Halpert", title: "Keeping up with Michael Scott" },
  ];

  return (
    <div>
      {basicData.map((el: Data) => (
        <IndividualDiscoverItem creator={el.creator} title={el.title} />
      ))}
    </div>
  );
};

export default DiscoverItems;
