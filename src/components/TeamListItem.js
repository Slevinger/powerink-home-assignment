import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Team = styled.div`
  background-color: ${({ selected }) => (selected ? "white" : "black")};
  padding: 5px;
  border-bottom: 1px gray solid;
  flex-direction: row;
  display: flex;
  color: white;
  height: 9%;
  padding: 5px;
  flex: 1;
`;

const Logo = styled.div`
  width: 50px;
  max-width: 50px;
  max-height: 50px;
  margin-right: 14px;
  min-width: 50px;
  margin-right: 14px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  text {
    text-decoration: none;
  }
`;

const StyledParam = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  flex: 1;
`;

const TeamParam = ({ title, value }) => {
  debugger;

  value = String(value);
  const nameArr = value.split(" ");
  const strValue =
    nameArr.length > 3
      ? `${value &&
          value
            .split(" ")
            .slice(0, 3)
            .join(" ")}...`
      : value;
  return (
    <StyledParam>
      <div>{title}</div>
      <div
        style={{
          flex: 1,
          justifyContent: "flex-end",
          display: "flex",
          textAlign: "right"
        }}
      >
        {strValue}
      </div>
    </StyledParam>
  );
};

export default ({
  Name,
  Founded,
  Address,
  WikipediaLogoUrl,
  TeamId,
  selected
}) => {
  return (
    <StyledLink
      to={location => {
        return `/teams/${TeamId}` + location.search;
      }}
    >
      <Team selected={selected}>
        <Logo>
          {WikipediaLogoUrl && (
            <img object-fit="contain" src={WikipediaLogoUrl} />
          )}
        </Logo>

        <div
          style={{
            textDecoration: "none",
            flexDirection: "column",
            display: "flex",
            width: "100%"
          }}
        >
          <TeamParam title="Name :" value={Name} />
          <TeamParam title="Founded :" value={Founded} />
          <TeamParam title="Address :" value={Address} />
        </div>
      </Team>
    </StyledLink>
  );
};
