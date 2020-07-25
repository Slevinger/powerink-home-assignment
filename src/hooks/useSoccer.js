import { useHistory } from "react-router-dom";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { pick, values } from "lodash";
import useQueryState from "use-query-state";
import { getSoccerTeams } from "../api/footballApi";
window.values = values;
window.pick = pick;

const findTeamsPage = (teams, pageSize, id) =>
  Math.floor(teams.findIndex(({ TeamId }) => TeamId == id) / pageSize);

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
  "VenueName"
];
export default () => {
  const [teams, setTeams] = useState([]);
  const history = useHistory();
  const [pageSize] = useState(10);
  const [filterTeams, setFilterTeams] = useState([]);
  const [currentIndex, setCurrentIndex] = useQueryState(0, "index");
  const [searchTerm, setSearchTerm] = useQueryState("", "search");

  const teamsMap = useMemo(() => {
    return teams.reduce(
      (acc, team, index) => ({ ...acc, [team.TeamId]: { ...team, index } }),
      {}
    );
  }, [teams]);

  useEffect(() => {
    (async () => {
      debugger;
      const res = await getSoccerTeams();
      await initFilterTeams(res);
      await setTeams(res);
    })();
  }, [searchTerm]);

  const initFilterTeams = useCallback(
    teams => {
      const filter = teams.filter(team =>
        values(pick(team, searchableKeys)).reduce(
          (acc, value) =>
            (value && value.toLowerCase().includes(searchTerm.toLowerCase())) ||
            acc,
          false
        )
      );
      debugger;

      setFilterTeams(filter);
    },
    [searchTerm]
  );

  const search = useCallback(
    text => {
      // if (text.length % 3 == 0 || text.length < searchTerm.length) {
      // setCurrentIndex(0);
      const filter = teams.filter(team =>
        values(pick(team, searchableKeys)).reduce(
          (acc, value) =>
            (value && value.toLowerCase().includes(text.toLowerCase())) || acc,
          false
        )
      );

      setFilterTeams(filter);
      // }
      setSearchTerm(text);
    },
    [teams]
  );

  return {
    filterTeams,
    teamsMap,
    searchTerm,
    currentIndex,
    setCurrentIndex,
    pageSize,
    totalCount: filterTeams.length,
    search
  };
};
