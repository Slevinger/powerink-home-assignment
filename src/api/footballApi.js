import axios from "axios";
const key = "f71c240c398642e99fee5725b600b260";
const API_URL = "https://api.sportsdata.io/v3/soccer";

const instance = axios.create({
  baseURL: API_URL
});

export const getSoccerTeams = async () => {
  const { data } = await instance.get(`/scores/json/Teams?key=${key}`);

  const teamsWithLogo = data.filter(({ WikipediaLogoUrl }) => WikipediaLogoUrl);
  return teamsWithLogo.sort((teamA, teamB) => teamA.Founded - teamB.Founded);
};

export const getTeamPlayers = async teamId => {
  const { data } = await instance.get(
    `/scores/json/PlayersByTeam/${teamId}?key=${key}`
  );

  return data;
};

export default instance;
