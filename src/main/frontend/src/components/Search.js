import styled from "styled-components";
import searchIcon from "../assets/images/search.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = ({ challengeData, showFilteredClgs }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredlist = search
    ? challengeData.filter((it) => {
        return it.clgname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    : [];

  const pressEnter = () => {
    if (window.location.pathname === "/main") {
      navigate("/searchChallenges");
    }
    showFilteredClgs(filteredlist);
  };
  return (
    <SearchBox>
      <Container>
        <img
          src={searchIcon}
          alt="search-icon"
          style={{ height: "20px", width: "20px" }}
        />
        <input
          placeholder="챌린지를 검색하세요"
          style={{
            width: "100%",
            border: "none",
            fontFamily: "HUScribble130"
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              pressEnter();
            }
          }}
        ></input>
      </Container>
      <SearchLine></SearchLine>
    </SearchBox>
  );
};
const Container = styled.div`
  width: 74vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.468vw;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.468vw;
`;
const SearchLine = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid #000000;
`;

export default Search;
