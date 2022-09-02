import React from "react";
import { FaBars } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Icon1,
  Icon2,
  IconName,
  Border,
  N
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <N>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">DOODLE</NavLogo>

          <NavBtn>
            <NavBtnLink to="/signin">
              <Icon1 />
              <IconName>로그인</IconName>
            </NavBtnLink>

            <NavBtnLink to="/MyInfo">
              <Icon2 />
              <IconName>내 정보</IconName>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </Nav>
      <Border />
    </N>
  );
};

export default Navbar;
