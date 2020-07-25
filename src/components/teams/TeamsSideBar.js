import React from "react";

import styled from "styled-components";
import ListOfTeams from "./ListOfTeams";
import "react-virtualized/styles.css";

const SideBar = styled.div`
  height: 100%;
  width: 100%;
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

export default ({ teamsMap, filterTeams, totalCount, search, searchTerm }) => {
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
      </Pager>

      {filterTeams.length && (
        <ListOfTeams teams={filterTeams} teamsMap={teamsMap} />
      )}
    </SideBar>
  );
};
