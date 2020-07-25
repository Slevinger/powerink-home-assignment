import React from "react";
import {
  StyledNote,
  StyledLink,
  Team,
  Logo,
  StyledTeamName,
  StyledTeamParamContainer
} from "../StyledComponents";

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
