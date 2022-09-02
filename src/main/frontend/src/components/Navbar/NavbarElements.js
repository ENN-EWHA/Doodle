import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

export const N = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
`;
export const Nav = styled.nav`
  background-color: white;
  width: 100%;
  height: 4.16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.16vw;
  z-index: 1;
  width: 74vw;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  cursor: pointer;
  font-size: 2.7vw;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  height: 4.16vw;
`;

export const MobileIcon = styled.div`
  display: none;
  //@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: black;
  // }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: end;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  background: lightgray;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    //위에누르려고하면
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Icon1 = styled(RiLoginBoxLine)`
  margin: 0px 20px 0px 20px;
  color: ${({ theme }) => theme.mint};
  height: 1.3vw;
  width: 1.3vw;
`;

export const Icon2 = styled(BiUserCircle)`
  margin: 0px 20px 0px 20px;
  color: ${({ theme }) => theme.mint};
  height: 1.3vw;
  width: 1.3vw;
`;

export const IconName = styled.div`
  font-size: 1vw;
  color: black;
  text-align: center;
`;
export const Border = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid #d9d9d9;
`;
