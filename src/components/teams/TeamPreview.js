import React, { useState, useEffect, useMemo } from "react";
import { Spacer, TeamProfilePage } from "../StyledComponents";
import { getTeamPlayers } from "../../api/footballApi";
import TeamDetails from "./TeamDetails";

const Player = ({ FirstName, LastName, Jersey, PhotoUrl }) => (
  <div className="player">
    <img src={PhotoUrl}></img>
    <text>{`# ${Jersey} - ${FirstName} ${LastName} `}</text>
  </div>
);

export default props => {
  const { TeamId } = props;
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      await setTeamPlayers([]);
      await setTeamPlayers(await getTeamPlayers(TeamId));
    })();
  }, [TeamId]);

  const Players = useMemo(
    () => (
      <div className="frame" style={{ maxHeight: 400, overflowY: "auto" }}>
        {teamPlayers.map(player => {
          return <Player {...player} />;
        })}
      </div>
    ),
    [teamPlayers]
  );
  return (
    <TeamProfilePage>
      <TeamDetails {...props} />
      <Spacer>{Players}</Spacer>
    </TeamProfilePage>
  );
};
