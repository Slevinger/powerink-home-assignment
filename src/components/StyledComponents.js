import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNote = styled.text`
  color: gray;
`;

export const Spacer = styled.div`
  margin: 35px;
`;

export const StyledBody = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  height: 100%;
  width: 100%;
`;

export const SearchBar = styled.input`
  padding: 5px;
  flex: 1;
`;

export const StyledLink = styled(Link)`
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

export const Team = styled.div`
  background-color: ${({ selected }) => (selected ? "lightcyan" : "black")};
  padding: 5px;
  box-shadow: 10px 10px 10px 10px;
  flex-direction: row;
  display: flex;
  color: ${({ selected }) => (selected ? "black" : "white")};
  height: 84px;
  padding: 5px;
  flex: 1;
`;

export const Logo = styled.div`
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

export const StyledTeamName = styled.div`
  padding-right: 84px;
  text-align: center;
  font-weight: 800;
  text-decoration: underline;
`;

export const StyledTeamParamContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PreviewPage = styled.div`
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

export const Header = styled.div`
  font-size: 2rem;
  flex: 1;
`;

export const TeamProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  .frame {
    max-height: 400px;
    overflow-y: auto;
  }

  .frame::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .frame::-webkit-scrollbar:vertical {
    width: 11px;
  }

  .frame::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, 0.5);
  }
  .player {
    display: flex;
    font-size: 1.5rem;
    text {
      align-self: center;
      margin-left: 20px;
    }
  }
`;
