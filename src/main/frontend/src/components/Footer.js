import githubIcon from "../assets/images/github.png";
import notionIcon from "../assets/images/notion.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBox>
      <Border />
      <Container>
        <Logo>
          <Link to={"/main"} style={{ color: "black", textDecoration: "none" }}>
            DOODLE
          </Link>
        </Logo>
        <FooterMenu>
          <TeamInfo>
            <Text>한 줄 설명</Text>
            <TeamInfoText>
              <Text>ver 1.0.0</Text>
              <Text>team name</Text>
            </TeamInfoText>
          </TeamInfo>
          <TeamSNS>
            <img
              src={githubIcon}
              alt="github-icon"
              style={{ height: "25px", width: "25px" }}
            />

            <img
              src={notionIcon}
              alt="notion-icon"
              style={{ height: "25px", width: "25px" }}
            />
          </TeamSNS>
        </FooterMenu>
      </Container>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5vw;
  background-color: #ffffff;
`;
const Border = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid #d9d9d9;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25vw;
  width: 74vw;
`;
const Logo = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 2.7vw;
  font-weight: bold;
  font-family: HUScribble130;
  line-height: auto;
  color: #000000;
`;
const FooterMenu = styled.div`
  height: 5.9vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.35vw;
`;

const TeamInfoText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25vw;
`;

const Text = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 1vw;
  font-family: HUScribble130;
  line-height: auto;
  color: #000000;
`;
const TeamSNS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4.947vw;
`;

export default Footer;
