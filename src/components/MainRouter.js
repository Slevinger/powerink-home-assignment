import React from "react";
import { Route, useParams, Redirect } from "react-router-dom";
import TeamsSideBar from "./teams/TeamsSideBar";
import TeamPreview from "./teams/TeamPreview";
import { StyledBody } from "./StyledComponents";
import Loading from "./Loading";
import SplitPane from "react-split-pane";
import useSoccer from "../hooks/useSoccer";

const Body = ({ teamsMap }) => {
  const { id } = useParams();
  if (!id && !teamsMap[id]) return null;
  return <TeamPreview {...teamsMap[id]} />;
};

export default () => {
  const soccerHook = useSoccer();
  const { filterTeams, teamsMap } = soccerHook;

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
          <Loading loading={Object.keys(teamsMap).length === 0}>
            <TeamsSideBar {...soccerHook} />
          </Loading>
        </Route>
        <StyledBody>
          <Loading loading={Object.keys(teamsMap).length === 0}>
            <Route path="/teams/:id">
              <Body {...soccerHook} />
            </Route>
          </Loading>
        </StyledBody>
      </SplitPane>
    </>
  );
};
