import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";
import styled from "styled-components";
import TeamsSideBar from "./TeamsSideBar";
import SplitPane from "react-split-pane";
import useSoccer from "../hooks/useSoccer";

const Body = ({ currentTeams }) => {
  const { id } = useParams();
  if (!id || !currentTeams[id]) return null;
  return <div style={{ color: "white" }}>{currentTeams[id].Name}</div>;
};

export default () => {
  const soccerHook = useSoccer();

  return (
    <>
      <SplitPane
        split="vertical"
        minSize={300}
        defaultSize={300}
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
        <div>
          <Route path="/teams/:id">
            <Body {...soccerHook} />
          </Route>
        </div>
        <Route path="/">
          <Redirect to="/teams" />
        </Route>
      </SplitPane>
    </>
  );
};
