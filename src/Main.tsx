import React, { useState } from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PodcastPage from "./PodcastPage";
import ProfilePage from "./ProfilePage";
import Explore from "./Explore";
import Signin from "./Signin";
import NewAccount from "./NewAccount";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main: React.FC = () => {
  const [podcastId, setPodcastId] = useState(0);
  const [podcastTitle, setPodcastTitle] = useState("");
  const [podcastCreator, setPodcastCreator] = useState("");
  const [podcastData, setPodcastData] = useState({
    id: 0,
    score: 0,
    creator: "",
    title: "",
  });
  const [loggedIn, setLoggedIn] = useState(true);

  function setId(id: number, creator: string, title: string, score: number) {
    setPodcastData({ id: id, creator: creator, title: title, score: score });
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
            creatorId={0}
            score={podcastData.score}
            title={podcastData.title}
          />
        </Route>
        <Route path="/profile">
          <ProfilePage setIdProps={setId} />
        </Route>
        <Route path="/explore">
          <Explore setIdProps={setId} />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/newaccount">
          <NewAccount />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
