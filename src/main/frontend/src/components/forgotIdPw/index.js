import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Link as LinkT } from "react-router-dom";


const FindIdPw = () => {
  return (
    <>
    <Navbar />
      <Container>
        <FormWrap>
          <Icon to="/">DOODLE</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>아이디를 잊어버리셨나요?</FormH1>
              <FormLabel htmlFor="for">이름</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="for">이메일</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">아이디찾기</FormButton>
              <Text href="/forgotpassword">비밀번호 찾기</Text>
              <Text href="/signup">아직 회원이 아니신가요?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default FindIdPw;


const Container = styled.div`
  min-height: 700px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: white;
`;
const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const Icon = styled(LinkT)`
  margin-left: 32ps;
  margin-top: 32px;
  text-decoration: none;git 
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  background: lightblue;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background: lightpink;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Text = styled.a`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

