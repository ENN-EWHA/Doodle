import { MdFamilyRestroom } from "react-icons/md";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About',
  headLine: "챌린지를 설정하고 달성하세요!",
  description: "매일매일 달리기",
  buttonLabel: "가입하세요",
  imgStart:true,
  img: require("./run.png"),
  alt: "run",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About',
  headLine: "친구와 함께 챌린지 목표를 달성하세요!",
  description: "매일매일 책읽기",
  buttonLabel: "함께하세요",
  imgStart: false,
  img: require("./read.png"),
  alt: "read",
  dark: false,
  primary: true,
  darkText: true
};


//코드수정(main페이지에 스크롤내리면 각각 다른 스타일+정보)