import React from "react";
import ListOfTeams from "./ListOfTeams";
import { SideBar, SearchBar } from "../StyledComponents";

export default ({ teamsMap, filterTeams, search, searchTerm }) => {
  return (
    <SideBar>
      <div style={{ display: "flex" }}>
        <SearchBar
          value={searchTerm}
          placeholder="Search..."
          onInput={e => {
            search(e.currentTarget.value);
          }}
        />
      </div>

      {filterTeams.length && (
        <ListOfTeams teams={filterTeams} teamsMap={teamsMap} />
      )}
    </SideBar>
  );
};
