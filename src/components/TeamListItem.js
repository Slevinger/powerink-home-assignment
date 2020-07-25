import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { StyledNote } from "./StyledComponents";

const Team = styled.div`
  background-color: ${({ selected }) => (selected ? "white" : "black")};
  padding: 5px;
  box-shadow: 10px 10px 10px 10px;
  flex-direction: row;
  display: flex;
  color: white;
  height: 84px;
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
    height: 50px;
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

const StyledTeamName = styled.div`
  padding-right: 84px;
  text-align: center;
  font-weight: 800;
  text-decoration: underline;
`;
const StyledTeamParamContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({
  Name,
  Founded,
  Address,
  WikipediaLogoUrl,
  TeamId,
  selected,
  onClick
}) => {
  return (
    <StyledLink
      to={location => {
        return `/teams/${TeamId}` + location.search;
      }}
    >
      <Team selected={selected} onClick={onClick}>
        <Logo>
          {WikipediaLogoUrl && (
            <img object-fit="contain" src={WikipediaLogoUrl} />
          )}
        </Logo>

        <div
          style={{
            textDecoration: "none",
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
            paddingBottom: "10px",
            width: "100%"
          }}
        >
          <StyledTeamName>{Name}</StyledTeamName>
          <StyledTeamParamContainer>
            <div>
              <StyledNote>address:</StyledNote>
              {Address}
            </div>
            <div>
              <StyledNote>founded:</StyledNote>
              {Founded}
            </div>
          </StyledTeamParamContainer>
        </div>
      </Team>
    </StyledLink>
  );
};
