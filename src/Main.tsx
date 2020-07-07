import React, { useState } from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PodcastPage from "./PodcastPage";
import Explore from "./Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main: React.FC = () => {
  const [podcastId, setPodcastId] = useState(0);
  const [podcastTitle, setPodcastTitle] = useState("");
  const [podcastCreator, setPodcastCreator] = useState("");
  const [podcastData, setPodcastData] = useState({
    id: 0,
    creator: "",
    title: "",
  });

  function setId(id: number, creator: string, title: string) {
    setPodcastData({ id: id, creator: creator, title: title });
    console.log(id);
  }

  return (
    <div id="main_body_structure">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Homepage setIdProps={setId} />
        </Route>
        <Route path={`/${podcastData.id}`}>
          <PodcastPage
            creator={podcastData.creator}
            title={podcastData.title}
          />
        </Route>
        <Route path="/explore">
          <Explore setIdProps={setId} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
