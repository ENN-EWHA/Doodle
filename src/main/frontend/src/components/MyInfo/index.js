import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Tab } from "./Tab";
import Footer from "../Footer";
const MyPage = () => {
  return (
    <>
      <Navbar />

      <Container>
        <PageContainer>
          <PageContainerWrap>
            <h1>내 정보</h1>

            <ContentContainer id="form">
              <Label>
                내 이름:
                <TextInput id="name" type="name" placeholder="이름불러오기" />
              </Label>
              <Label>
                이메일:
                <TextInput
                  id="email"
                  type="email"
                  placeholder="이메일불러오기"
                />
              </Label>
              <Label>
                공개범위:
                <TextInput
                  id="email"
                  type="email"
                  placeholder="공개범위불러오기"
                />
              </Label>
              <Label>
                친구코드:
                <TextInput
                  id="email"
                  type="email"
                  placeholder="친구코드불러오기"
                />
              </Label>
            </ContentContainer>
          </PageContainerWrap>
          <SearchContainer>
            <h3>친구검색</h3>

            <SearchFriend>
              {/* 
              <SearchLabel>
                친구검색:
                <input type = "text" id ="search" onkeyup="filter()" placeholder="친구 이름을 검색하세요" />
              </SearchLabel>  */}
            </SearchFriend>
          </SearchContainer>

          <ContentContainer>
            <Tab />
          </ContentContainer>
        </PageContainer>
      </Container>
      <Footer />
    </>
  );
};

export default MyPage;

const PageContainerWrap = styled.div`
  display: grid;
  height: 400px;
`;
const SearchContainer = styled.div`
  display: grid;
  height: 100px;
`;
//전체
const PageContainer = styled.div`
  display: grid;
  height: 1000px;
  width: 1000px;
  background: linear-gradient(20deg, grays, white, gray);
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 800px;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 0;
  position: absolute;
`;
const SearchLabel = styled.label``;
const Label = styled.label`
  display: flex;
  margin-bottom: 16px;
  margin-right: 10px;
  padding-right: 500px;
  align-items: center;
  justify-content: space-between;
`;
const TextInput = styled.input`
  display: block;
  width: 175px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;
  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
`;
const SearchInput = styled.input`
  display: block;
  width: 175px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;
  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
`;
const ContentContainer = styled.div`
  height: 300px;
  width: 800px;
  background-color: #daeaf1;
  padding: 20px 20px;
  border: 1px solid black;
  margin: 0px;
  margin-top: 0px;

  justify-content: center;
  align-items: center;
`;

const MyInfor = styled.div`
  background-color: ;
  // border:1px solid black;
  // border-radius:15px;

  text-align: center;

  vertical-align: center;
  font-size: 40px;

  line-height: 50px;
  width: 150px;
  color: #000000;
`;

const MyName = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 40px;

  line-height: auto;
  color: #000000;
`;
const MyEmail = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 40px;

  line-height: auto;
  color: #000000;
`;
const SearchFriend = styled.input`
  height: 30px;
  width: 300px;
  display: flex;
  border: 1px solid black;
`;
