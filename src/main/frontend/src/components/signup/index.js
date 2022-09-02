// import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
// import React from 'react'
// import Navbar from '../Navbar';
// import useData from './Data';
// import {  Container,
//   FormWrap,
//   Icon,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   FormButton,
//   Text }from "./SignupElements";
// import validate from './validateInfo';
// import {useForm,SubmitHandler} from 'react-hook-form';

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
