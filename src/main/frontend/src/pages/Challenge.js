import styled from "styled-components";
import AboutChallenge from "../components/AboutChallenge";
import Challenger from "../components/Challenger";
import Footer from "../components/Footer";
import HallOfFame from "../components/HallOfFame";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Challenge = ({ clg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ChallengeBox>
      <Navbar toggle={toggle} />
      <Container>
        <LeftBox>
          <AboutChallenge clg={clg}></AboutChallenge>
          <HallOfFame clg={clg} />
        </LeftBox>
        <Challenger clg={clg}></Challenger>
      </Container>
      <Footer></Footer>
    </ChallengeBox>
  );
};

const ChallengeBox = styled.div`
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.08vw 0px;
  flex: 1;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50vw;
  height: 33.6vw;
`;

export default Challenge;
