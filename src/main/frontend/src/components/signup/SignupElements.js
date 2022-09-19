import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  min-height: 700px;
  // position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: white;
`;
export const FormWrap = styled.div`
  height:1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 32ps;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
background: lightgray;
max-width: 600px;
height: 1000px;
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

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;


export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: black;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  height:50px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: lightpink;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.a`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const Error=styled.div`
color: red;
margin:8px 0 16px;
font-weight=bold;
`;
export const Success= styled.div`
color:blue;
font-weight:bold;
`;
export const LinkContainer = styled.p`
font-size:13px;
color: black;
margin: 0 auto 8px;
width:400px;
max-width:400px;
 `