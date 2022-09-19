
import React,{useCallback, useState} from 'react'
import { BiShapeTriangle } from 'react-icons/bi';
import Navbar from '../Navbar';
import useData from './Data';
import axios from 'axios';
import {  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Error,
  Success,
  Text }from "./SignupElements";
import validate from './validateInfo';
//import {useForm,SubmitHandler} from 'react-hook-form';

// {
//     ”username”: “Timothee Chalamet”,
//     ”nickname”: “peach”,
//     ”email”: “Timo22@google.com”,
//     ”userid”: “Timooo24”,
//     ”userpw”: “ennlab22”
//     }

const SignUp=()=>{
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [nickname,setNickname]=useState('');
    const [userid,setUserId]=useState('');
    const [userpw,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const [mismatchError, setMismatchError]=useState(false);
  
     

    const onChangeUsername = useCallback((e) => 
    {setUsername(e.target.value);},
        [],
      )
    const onChangeUserId=useCallback((e)=>{
      setUserId(e.target.value);
    },[],)
    
    const onChangeEmail = useCallback(
      (e) => {setEmail(e.target.value);},
      [],
    )
    const onChangeNickname = useCallback(
        (e) => {setNickname(e.target.value);
        },
        [],
      )
      const onChangePassword = useCallback(
        (e) => {setPassword(e.target.value);
        setMismatchError(e.target.value!==password2)},
        [password2],
      )
      const onChangePassword2 = useCallback(
        (e) => {setPassword2(e.target.value);
        setMismatchError(e.target.value!==userpw)},
        [userpw],
      )


      const onSubmit = ()=>{       
        // if(!mismatchError){
        //   console.log('서버로 회원가입하기');
        //   axios
        //   .post("/users/signup",{userid,username,userpw,nickname,email            })
        //   .then(function(response){console.log(response);})
        //   .catch(function(error){console.log(error);});
        // };
        // axios
        // .post("/users/signup",{
        //     username:"dahee",
        //     userid:"dahi",
        //     userpw:"123",
        //     email:"cu@naver.com",
        //     nickname:"123"})
        // .then((response)=>console.log(response))
        // .catch((error) => console.log(error));
        // };
        axios
        .post("/users/signup",{
            username,
            userid,
            userpw,
            email,
            nickname})
        .then((response)=>console.log(response))
        .catch((error) => console.log(error));
        };
      //   axios.post("/challenges",{
      //     clgname: "스프링부트스터디",
      //     clgmanagerid: "ccc1",
      //     clginfo: "강의 2개씩 듣고 인증",
      //     clgmemberno: 10,
      //     clgCateId: "운동",
      //     end_date: "2024-11-11"
      //   }
      //   )
      //   .then(function(response){console.log(response)})
      //   .catch(function(error){console.log(error)});
      // };
  


      return(
        <>
        <Navbar />
            <Container>
              <FormWrap>
                <FormContent>
                  <Form onSubmit={onSubmit}>
                      <FormH1>회원가입하기</FormH1>
                    
                  
                      <FormLabel id = "emailLabel">이메일</FormLabel>
                      <FormInput id= "email" type="email" name="email" placeholder="이메일을 입력하세요" value={email} onChange={onChangeEmail} />
                    
                      <FormLabel id = "nicknameLabel">별명</FormLabel>
                      <FormInput id= "nickname" type="text" name="nickname" placeholder="별명를 입력하세요" value={nickname} onChange={onChangeNickname} />
                     
                      <FormLabel id = "idLabel">아이디</FormLabel>
                      <FormInput id= "userid" type="text" name="userid" placeholder="아이디를 입력하세요" value={userid} onChange={onChangeUserId} />
                      
                      <FormLabel id = "userLabel">이름</FormLabel>
                      <FormInput id= "username" type="text" name="username" placeholder="이름을 입력하세요" value={username} onChange={onChangeUsername} />

                      <FormLabel id = "passwordLabel">비밀번호:</FormLabel>
                      <FormInput id= "userpw" type="password" name="userpw" placeholder="비밀번호를 입력하세요" value={userpw} onChange={onChangePassword} />
                     
                      <FormLabel id = "password2Label">비밀번호확인:</FormLabel>
                      <FormInput id= "password2" type="password" name="password2" placeholder="비밀번호를 다시한번 입력하세요" value={password2} onChange={onChangePassword2} />
                      {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                      {!nickname && <Error>닉네임을 입력해주세요</Error>}
                      {/* {signUpError&& <Error>이미 가입된 이메일입니다.</Error>} */}

                      <FormButton type="submit" to="/main">가입하기</FormButton>
                      <Text href="/signin">회원이라면 로그인하러가기</Text>
                      
                      
                  </Form>
                </FormContent>
              </FormWrap>
            </Container>
        </>
      )
      
}
export default SignUp;
// const SignUp = () => {
//   const {register, watch, handleSubmit, reset, formState }= useForm({defaultValues: {text:""}});
//   const useEffect= (()=>{
//       if(formState.isSubmitSuccessful){
//         reset({text:""});
//       }, [formState, reset]);
    
//   const onSubmit = data=>{
//     const {email, password} = data;
//       axios.post(`/api/user`, {
//       email, password
//     }, {
//       withCredentials: true // CORS 처리 옵션
//     }
//   ).catch((error) => {
//     console.dir(error);
//   });
//   }
//   const{errors} = formState;  
//   return (
//     <>
//     <Navbar />
//       <Container>
//         <FormWrap>
//           <Icon to="/">DOODLE</Icon>
//           <FormContent>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//               {/* <input {...register("email", {
//                 required:"필수응답",
//                 pattern:{
//                   value:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
//                   message:"이메일형식이아닙니다."}})}/>
//                   {errors.email &errors.message}
//               <input {...register("password", {
//                 required:"필수응답",
//                 minLength:{
//                     value:8, 
//                     message:"8자이상"}})}/>
//                   {errors.password &errors.password.message}
//                    */}
//               <FormH1>가입하기</FormH1>
//               <FormLabel htmlFor="username">아이디</FormLabel>
//               <FormInput 
//               id="username"
//               type="text" 
//               name="username"
//               placeholder="아이디를 입력하세요" 
//               value={values.username}
//               onChange={handleChange}required />
//               {errors.username}

//               <FormLabel htmlFor="email">이메일</FormLabel>
//               <FormInput 
//               id="email"
//               type="email" 
//               name="email"
//               placeholder="이메일을 입력하세요" 
//               value={values.email}
//               onChange={handleChange}required />
//               {errors.email}

//               <FormLabel htmlFor="password">비밀번호</FormLabel>
//               <FormInput 
//               id="password"
//               type="password" 
//               name="password"
//               placeholder="비밀번호를 입력하세요"
//               value={values.password}
//               onChange={handleChange} required minlength="8"/>
//               {errors.password}

//               <FormLabel htmlFor="password2">비밀번호 확인</FormLabel>
//               <FormInput 
//               id="password2"
//               type="password" 
//               name="password2"
//               placeholder="비밀번호를 다시한번 입력하세요"
//               value={values.password2}
//               onChange={handleChange} required />
//               {errors.password2}

              
//               <FormButton type="button">가입하기</FormButton>
//               <Text href="/signin">회원이라면 로그인하러가기</Text>
//             </Form>

//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//  );
// };




// export default SignUp;
