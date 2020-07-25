import axios from "axios";
const key = "f71c240c398642e99fee5725b600b260";
const API_URL = "https://api.sportsdata.io/v3/soccer";

const instance = axios.create({
  baseURL: API_URL
});

export const getSoccerTeams = async () => {
  const { data } = await instance.get(`/scores/json/Teams?key=${key}`);

  return data.filter(({ WikipediaLogoUrl }) => WikipediaLogoUrl); //.sort((a, b) => (a.AreaName > b.AreaName ? 1 : -1));
};

export default instance;
