import React from "react";
import { Route, useParams, Redirect } from "react-router-dom";
import TeamsSideBar from "./TeamsSideBar";
import TeamPreview from "./TeamPreview";
import { StyledBody } from "./StyledComponents";
import SplitPane from "react-split-pane";
import useSoccer from "../hooks/useSoccer";
import { CommonLoading } from "react-loadingg";

const Body = ({ teamsMap }) => {
  const { id } = useParams();
  if (!id || !teamsMap[id]) return null;
  return <TeamPreview {...teamsMap[id]} />;
};

export default () => {
  const soccerHook = useSoccer();
  const { filterTeams } = soccerHook;

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
          {filterTeams.length > 0 ? (
            <Route path="/teams/:id">
              <Body {...soccerHook} />
            </Route>
          ) : (
            <CommonLoading />
          )}
        </StyledBody>
      </SplitPane>
    </>
  );
};
