import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from "./SigninElements";
import Navbar from "../Navbar";
import Footer from "../Footer";
const signIn = () => {
  function handleClick(e) {
    window.location.replace("/main");
  }
  return (
    <>
      <Navbar />
      <Container>
        <FormWrap>
          <Icon to="/">DOODLE</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit" onClick={handleClick}>
                Continue
              </FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default signIn;
