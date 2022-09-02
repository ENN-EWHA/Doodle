import styled from "styled-components";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import TodayChallenges from "../components/TodayChallenges";
import React, { useState } from "react";

const Main = ({
  challengeData,
  userChallengeData,
  onEditColor,
  onDelete,
  userData,
  onEditComplete,
  showCategoryClgs,
  showFilteredClgs
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainBox>
      <Navbar toggle={toggle} />
      <Container>
        <Search
          challengeData={challengeData}
          showFilteredClgs={showFilteredClgs}
        />
        <LeftBox>
          <Calendar challengeData={userChallengeData} />
          <RightBox>
            <TodayChallenges
              onEditComplete={onEditComplete}
              challengeData={userChallengeData}
              onEditColor={onEditColor}
              onDelete={onDelete}
              userData={userData}
            />
          </RightBox>
        </LeftBox>
      </Container>
      <Footer />
    </MainBox>
  );
};

const MainBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
const LeftBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default Main;
