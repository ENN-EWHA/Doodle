import styled from "styled-components";
import ownerIcon from "../assets/images/crown.png";
import membersIcon from "../assets/images/members.png";
import periodIcon from "../assets/images/calendar.png";
import achieverateIcon from "../assets/images/medal.png";

const AboutChallenge = ({ clg }) => {
    return (
        <AboutChallengeBox>
            <Container>
                <ChallengeName>{clg.clgname}</ChallengeName>
                <Content>
                    <ClgExplain>
                        <Text>{clg.clginfo}</Text>
                    </ClgExplain>
                    <ChallengeInfo>
                        <Icon>
                            <img
                                src={ownerIcon}
                                alt="owner-icon"
                                style={{
                                    height: "1vw",
                                    width: "1vw",
                                }}
                            />
                            <Text>{clg.clgmanagerid}</Text>
                        </Icon>
                        <Icon>
                            <img
                                src={membersIcon}
                                alt="members-icon"
                                style={{
                                    height: "1vw",
                                    width: "1vw",
                                }}
                            />
                            <Text>{clg.clgmemberno}</Text>
                        </Icon>
                        <Icon>
                            <img
                                src={achieverateIcon}
                                alt="achieverate-icon"
                                style={{
                                    height: "1vw",
                                    width: "1vw",
                                }}
                            />
                            <Text>78%</Text>
                        </Icon>
                        <Icon>
                            <img
                                src={periodIcon}
                                alt="period-icon"
                                style={{
                                    height: "1vw",
                                    width: "1vw",
                                }}
                            />
                            <Text>
                                {clg.made_date} ~ {clg.end_date}
                            </Text>
                        </Icon>
                    </ChallengeInfo>
                    <JoinButton>
                        <Text>참여하기</Text>
                    </JoinButton>
                </Content>
            </Container>
        </AboutChallengeBox>
    );
};

const AboutChallengeBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.73vw 0.625vw;
    gap: 0.5vw;
    background-color: #d9d9d9;
    width: 50.1vw;
    margin-bottom: 1.09vw;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.5vw;
    gap: 0.5vw;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1.56vw;
    width: 100%;
`;
const ClgExplain = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.78vw;
    background-color: #f3f3f3;
    width: 22.86vw;
    height: 5.52vw;
`;
const ChallengeName = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1.6vw;
    font-family: HUScribble150;
    line-height: auto;
    color: #000000;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;

const ChallengeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.1vw;
`;
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.57vw;
`;

const JoinButton = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5vw;
    background-color: #ffffff;
    width: 8.17vw;
`;

export default AboutChallenge;
