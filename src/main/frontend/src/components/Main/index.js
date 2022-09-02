import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  MainContainer,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  MainBg,
  VideoBg,
  ArrowForward,
  ArrowRight
} from "./mainElements";

const MainPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>챌린지를 설정하고 달성하세요!</MainH1>
        <MainP>매일매일</MainP>
        <MainBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            sign up {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainPage;
