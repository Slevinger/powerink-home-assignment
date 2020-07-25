import React from "react";
import styled from "styled-components";
import { StyledNote, Spacer } from "../StyledComponents";

const PreviewPage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  color: white;
  img {
    height: 200px;
    object-fit: contain;
    overflow: hidden;
    margin: 10px;
  }
`;

const Header = styled.div`
  font-size: 2rem;
  flex: 1;
`;

export default ({ Name, Website, Address, Founded, WikipediaLogoUrl }) => {
  return (
    <PreviewPage id="page-preview">
      <Spacer>
        <img src={WikipediaLogoUrl} />
      </Spacer>
      <Spacer>
        <div
          style={{ display: "flex", flexDirection: "column", height: "90%" }}
        >
          <Header>{Name}</Header>
          <div>
            <StyledNote>Address : </StyledNote>
            {Address}
          </div>
          <div>
            <StyledNote>Founded at : </StyledNote>
            {Founded}
          </div>
          <a href={Website} target="_blank">
            {Website}
          </a>
        </div>
      </Spacer>
    </PreviewPage>
  );
};
