import React,{useState,useCallback} from "react";
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
import Navbar from "../Navbar"
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import FindIdPw from '../forgotIdPw'


// const SignIn=()=>{
//   const[inputEmail,setInputEmail]= useState('')
//   const[inputPw,setInputPw]= useState('')

//   const handleInputEmail=(e)=>{
//     setInputEmail(e.target.value)
//   } 
//   const handleInputPw=(e)=>{
//     setInputPw(e.target.value)
//   }

//   function handleClick(e){
//     window.location.replace("./main")
//   }
//   useEffect(()=>{
//     axios.get('./users/login')
//     .then(res=>console.log(res))
//     .catch()
//   },
//   [])
const SignIn=()=>{
  const[userid,setUserid]=useState("");
  const[userpw,setPassword]=useState("");

  const onChangeUserid = useCallback(
    (e) => {setUserid(e.target.value);},
    [],
  )
 
  function handleClick(e) {
    window.location.replace("/main");
  }
  const onChangePassword = useCallback(
    (e) => {setPassword(e.target.value);},
    [],
  )
  const onSubmit=useCallback(()=>{
    axios.post('/users/login',
    {userid,userpw},
    {
      withCredentials:true,
    },)
    .then((response)=>console.log(response))
    .catch((error) => console.log(error.data));
      
    
  })


  return (
    <>
    <Navbar />
      <Container>
        <FormWrap>
          <Icon to="/">DOODLE</Icon>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormH1>로그인하세요</FormH1>
             
              <FormLabel id = "useridLabel">아이디</FormLabel>
              <FormInput id= "userid" type="text" name="userid" placeholder="아이디을 입력하세요" value={userid} onChange={onChangeUserid} />
                    
              <FormLabel id = "passwordLabel">비밀번호:</FormLabel>
              <FormInput id= "userpw" type="password" name="userpw" placeholder="비밀번호를 입력하세요" value={userpw} onChange={onChangePassword} />
                     
              <FormButton type="submit" onClick={handleClick}>로그인하기</FormButton>
              
              <Text href="/forgotIdPw">Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
