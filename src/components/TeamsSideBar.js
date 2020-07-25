import React, { useState, useRef } from "react";
import styled from "styled-components";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useLocation } from "react-router-dom";
import "react-virtualized/styles.css";
import { Column, Table } from "react-virtualized";
import { List, AutoSizer } from "react-virtualized/dist/commonjs";
import TeamListItem from "./TeamListItem";

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

export default ({
  teamsMap,
  pageSize,
  setCurrentIndex,
  currentIndex,
  filterTeams,
  totalCount,
  search,
  searchTerm
}) => {
  const { pathname } = useLocation();
  const listRef = useRef();
  const id = pathname.split[2];
  const index = id ? teamsMap[id].index : currentIndex;
  // debugger;
  const scrollTo = Number(index) + 10;
  console.log("scroll too", scrollTo);
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
        <div>
          <AutoSizer>
            {({ width }) => (
              <List
                ref={listRef}
                height={800}
                rowCount={totalCount}
                rowHeight={85}
                overscanRowCount={30}
                onRowsRendered={async info => {
                  const { startIndex } = info;
                  debugger;

                  await setCurrentIndex(startIndex || Number(currentIndex));
                }}
                scrollToIndex={index}
                rowRenderer={({ index, isScrolling, key, style }) => {
                  console.log(index);
                  const team = filterTeams[index];
                  return (
                    <div
                      style={{
                        ...style,
                        height: "90px",
                        color: "white",
                        borderBottom: "solid 1px gray"
                      }}
                    >
                      <TeamListItem
                        key={key}
                        selected={id === team.TeamId}
                        {...team}
                      />
                    </div>
                  );
                }}
                width={width}
              />
            )}
          </AutoSizer>
        </div>
      )}
    </SideBar>
  );
};
