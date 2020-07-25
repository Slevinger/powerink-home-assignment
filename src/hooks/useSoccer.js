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
  const [currentPage, setCurrentPage] = useQueryState(0, "page");
  const [searchTerm, setSearchTerm] = useQueryState("", "search");

  useEffect(() => {
    (async () => {
      const res = await getSoccerTeams();
      await setFilterTeams(res);
      await setTeams(res);
    })();
  }, []);

  const search = useCallback(
    text => {
      // if (text.length % 3 == 0 || text.length < searchTerm.length) {
      setCurrentPage(0);
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

  const currentTeams = useMemo(() => {
    return filterTeams
      .slice(pageSize * currentPage, currentPage * pageSize + pageSize)
      .reduce((acc, team) => ({ ...acc, [team.TeamId]: team }), {});
  }, [filterTeams, currentPage, searchTerm]);

  const changePage = useCallback(
    iteration => {
      const nextIndex = currentPage * pageSize + iteration * pageSize;
      if (nextIndex <= filterTeams.length && nextIndex >= 0) {
        setCurrentPage(Number(currentPage) + iteration);

        // setCurrentPage(currentPage + iteration);
      }
    },
    [currentPage, teams.length, history]
  );

  useEffect(() => {
    const { pathname } = history.location;
    const id = pathname.split("/")[2];
    const pageToBe = findTeamsPage(filterTeams, pageSize, id);
    if (id && currentPage != pageToBe) {
      setCurrentPage(pageToBe);
    }
  }, [filterTeams.length]);

  return {
    currentTeams,
    filterTeams,
    searchTerm,
    currentPage,
    pageSize,
    totalCount: filterTeams.length,
    search,
    stepNext: () => {
      debugger;
      changePage(1);
    },
    stepBack: () => {
      changePage(-1);
    }
  };
};
