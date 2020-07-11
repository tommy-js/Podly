import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  creator: string;
  creatorId: number;
}

const CreatorTitle: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to={`/creator/${props.creatorId}`}>
        <h2>{props.creator}</h2>
      </Link>
    </div>
  );
};

export default CreatorTitle;
