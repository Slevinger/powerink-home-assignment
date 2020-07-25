import React from "react";
import styled from "styled-components";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useLocation } from "react-router-dom";
import "react-virtualized/styles.css";
import { Column, Table } from "react-virtualized";
import List from "react-virtualized/dist/commonjs/List";
import TeamListItem from "./TeamListItem";

const SideBar = styled.div`
  height: 100%;
  width: 100%;
`;

const TeamList = styled.div`
  flex: 10;
  height: 90%;
  overflow-y: auto;
`;

const Pager = styled.div`
  flex: 1;
  align-items: center;
  color: white;
  justify-content: flex-end;
  display: flex;
  .clickable {
    &:hover {
      cursor: pointer;
    }
  }
`;

const SearchBar = styled.input`
  padding: 5px;
  flex: 1;
`;

export default ({
  pageSize,
  currentPage,
  stepNext,
  stepBack,
  filterTeams,
  totalCount,
  search,
  searchTerm
}) => {
  const { pathname } = useLocation();
  const id = pathname.split[2];
  return (
    <SideBar>
      <Pager>
        <SearchBar
          value={searchTerm}
          placeholder="Search..."
          onInput={e => {
            search(e.currentTarget.value);
          }}
        />
        <SkipPreviousIcon onClick={stepBack} className="clickable" />
        {`${currentPage * pageSize}-${Math.min(
          totalCount,
          currentPage * pageSize + pageSize
        )}`}
        <SkipNextIcon onClick={stepNext} className="clickable" />
      </Pager>

      <TeamList>
        {Object.values(filterTeams).map(team => (
          <TeamListItem selected={id === team.TeamId} {...team} />
        ))}
      </TeamList>
    </SideBar>
  );
};
