import styled from "styled-components";
import Categories from "../components/Categories";
import Challenges from "../components/Challenges";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ClgAddButton from "../components/ClgAddButton";

const SearchChallenges = ({
  challengeData,
  showCategoryClgs,
  showFilteredClgs,
  clgs,
  setClickedClg
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SearchChallengesBox>
      <Navbar toggle={toggle} />
      <Container>
        <Search
          challengeData={challengeData}
          showFilteredClgs={showFilteredClgs}
        ></Search>
        <Categories showCategoryClgs={showCategoryClgs}></Categories>
        <Challenges
          challengeData={clgs}
          setClickedClg={setClickedClg}
        ></Challenges>
        <BottomBox>
          <ClgAddButton></ClgAddButton>
        </BottomBox>
      </Container>
      <Footer></Footer>
    </SearchChallengesBox>
  );
};

const SearchChallengesBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.468vw;
`;

const Container = styled.div`
  width: 74vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.08vw 0px;
  gap: 2.08vw;
  flex: 1;
`;
const BottomBox = styled.div`
  width: 74vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export default SearchChallenges;
