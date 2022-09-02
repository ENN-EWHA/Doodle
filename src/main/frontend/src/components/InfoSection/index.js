import React from "react";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  Heading,
  TopLine,
  Subtitle,
  BtnWrap,
  TextWrapper,
  Img,
  ImgWrap
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  dark,
  primary,
  img,
  alt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home"
                  dark={dark ? 1: 0}
                  primary = {primary ? 1: 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img src={img} alt={alt}/></ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
