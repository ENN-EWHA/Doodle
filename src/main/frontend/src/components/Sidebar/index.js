import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">우리홈페이지는</SidebarLink>
          <SidebarLink to="Challenge">챌린지 검색하기</SidebarLink>
          <SidebarLink to="signup">홈페이지 가입하기</SidebarLink>

          <SidebarLink to="MyInfo">마이페이지</SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to="signin">로그인하러가기</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
