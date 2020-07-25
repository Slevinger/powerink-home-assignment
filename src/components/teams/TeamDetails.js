import React from "react";
import styled from "styled-components";
import { StyledNote, Spacer, PreviewPage, Header } from "../StyledComponents";

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
