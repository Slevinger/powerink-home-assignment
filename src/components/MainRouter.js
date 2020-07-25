import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";
import TeamsSideBar from "./TeamsSideBar";
import TeamPreview from "./TeamPreview";
import { StyledBody } from "./StyledComponents";
import SplitPane from "react-split-pane";
import useSoccer from "../hooks/useSoccer";

const Body = ({ teamsMap }) => {
  const { id } = useParams();
  if (!id || !teamsMap[id]) return null;
  return <TeamPreview {...teamsMap[id]} />;
};

export default () => {
  const soccerHook = useSoccer();

  return (
    <>
      <SplitPane
        split="vertical"
        minSize={300}
        defaultSize={450}
        resizerStyle={{
          background: "white",
          width: "2px",
          cursor: "col-resize",
          margin: "0 5px",
          height: "100%"
        }}
      >
        <Route path="/teams">
          <TeamsSideBar {...soccerHook} />
        </Route>
        <StyledBody>
          <Route path="/teams/:id">
            <Body {...soccerHook} />
          </Route>
        </StyledBody>
        <Route path="/">
          <Redirect to="/teams" />
        </Route>
      </SplitPane>
    </>
  );
};
