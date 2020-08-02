import { useState, useCallback, useMemo, useEffect } from "react";
import { pick, values } from "lodash";
import { getSoccerTeams } from "../api/footballApi";
import useQueryState from "use-query-state";

const searchableKeys = [
  "Address",
  "AreaName",
  "City",
  "ClubColor1",
  "ClubColor2",
  "FullName",
  "Name",
  "Nickname1",
  "Nickname2",
  "VenueName",
  "Founded"
];

const searchInTeams = (teams, searchTerm) => {
  return teams.filter(team =>
    values(pick(team, searchableKeys)).reduce(
      (acc, value) =>
        (value &&
          ("" + value).toLowerCase().includes(searchTerm.toLowerCase())) ||
        acc,
      false
    )
  );
};
export default () => {
  const [teams, setTeams] = useState([]);
  const [filterTeams, setFilterTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useQueryState("", "search");

  const teamsMap = useMemo(() => {
    return teams.reduce(
      (acc, team, index) => ({ ...acc, [team.TeamId]: { ...team, index } }),
      {}
    );
  }, [teams]);

  useEffect(() => {
    if (Object.keys(teamsMap).length === 0) {
      (async () => {
        const res = await getSoccerTeams();
        await setTeams(res);
      })();
    }
    initFilterTeams();
  }, [searchTerm, teamsMap]);

  const initFilterTeams = useCallback(() => {
    setFilterTeams(searchInTeams(teams, searchTerm));
  }, [searchTerm, teams]);

  const search = useCallback(
    text => {
      setFilterTeams(searchInTeams(teams, text));
      setSearchTerm(text);
    },
    [teams]
  );

  return {
    filterTeams,
    teamsMap,
    searchTerm,
    totalCount: filterTeams.length,
    search
  };
};
