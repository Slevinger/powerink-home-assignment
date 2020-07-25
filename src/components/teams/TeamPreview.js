import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Spacer } from "../StyledComponents";
import { getTeamPlayers } from "../../api/footballApi";
import TeamDetails from "./TeamDetails";

const Player = ({ FirstName, LastName, Jersey, PhotoUrl }) => (
  <div className="player">
    <img src={PhotoUrl}></img>
    <text>{`# ${Jersey} - ${FirstName} ${LastName} `}</text>
  </div>
);

const TeamProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  .frame {
    max-height: 400px;
    overflow-y: auto;
  }

  .frame::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .frame::-webkit-scrollbar:vertical {
    width: 11px;
  }

  .frame::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, 0.5);
  }
  .player {
    display: flex;
    font-size: 1.5rem;
    text {
      align-self: center;
      margin-left: 20px;
    }
  }
`;

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
