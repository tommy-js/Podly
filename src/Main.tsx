import React, { useState } from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PodcastPage from "./PodcastPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main: React.FC = () => {
  const [podcastId, setPodcastId] = useState(0);

  function setId(id: number) {
    setPodcastId(id);
    console.log(id);
  }

  return (
    <div id="main_body_structure">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Homepage setIdProps={setId} />
        </Route>
        <Route path={`/${podcastId}`}>
          <PodcastPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
