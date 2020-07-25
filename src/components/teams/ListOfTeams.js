import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { List, AutoSizer } from "react-virtualized/dist/commonjs";
import TeamListItem from "./TeamListItem";

export default ({ teams, teamsMap }) => {
  const { pathname } = useLocation();
  const listRef = useRef();
  const id = pathname.split("/")[2];
  return (
    <div>
      <AutoSizer>
        {({ width }) => (
          <List
            ref={listRef}
            height={800}
            rowCount={teams.length}
            rowHeight={85}
            overscanRowCount={30}
            scrollToIndex={teamsMap[id]}
            rowRenderer={({ index, isScrolling, key, style }) => {
              const team = teams[index];
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
  );
};
