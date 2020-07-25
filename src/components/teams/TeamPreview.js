import React, { useState, useEffect } from "react";
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
      setTeamPlayers(await getTeamPlayers(TeamId));
    })();
  }, [TeamId]);
  return (
    <TeamProfilePage>
      <TeamDetails {...props} />
      <Spacer>
        <div className="frame" style={{ maxHeight: 400, overflowY: "auto" }}>
          {teamPlayers.map(player => {
            debugger;
            return <Player {...player} />;
          })}
        </div>
      </Spacer>
    </TeamProfilePage>
  );
};
