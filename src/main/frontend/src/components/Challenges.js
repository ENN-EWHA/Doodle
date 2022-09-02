import styled from "styled-components";
import ownerIcon from "../assets/images/crown.png";
import membersIcon from "../assets/images/members.png";
import periodIcon from "../assets/images/calendar.png";
import { useState } from "react";
import leftIcon from "../assets/images/left.png";
import rightIcon from "../assets/images/right.png";
import { Link } from "react-router-dom";

const Challenges = ({ challengeData, setClickedClg }) => {
    const [num, setNum] = useState(0);
    const renderChallenge = (it) => {
        const result = [];
        result.push(
            <Link
                to={"/challenge"}
                style={{ color: "black", textDecoration: "none" }}
                onClick={(e) => setClickedClg(it)}
            >
                <Challenge>
                    <ChallengeContent>
                        <ChallengeName>{it.clgname}</ChallengeName>
                        <ChallengeInfobox>
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
                                    <Text>{it.clgmanagerid}</Text>
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
                                    <Text>{it.clgmemberno}</Text>
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
                                        {it.made_date} ~ {it.end_date}
                                    </Text>
                                </Icon>
                                <InfoText>
                                    <Text>{it.clginfo}</Text>
                                </InfoText>
                            </ChallengeInfo>
                            <JoinButton>
                                <JoinText>참여하기</JoinText>
                            </JoinButton>
                        </ChallengeInfobox>
                    </ChallengeContent>
                </Challenge>
            </Link>
        );
        return result;
    };

    return (
        <ChallengesBox>
            <LeftRightButton>
                {num > 0 ? (
                    <img
                        src={leftIcon}
                        alt="left-icon"
                        style={{ height: "1.2vw", width: "1.2vw" }}
                        onClick={(e) => {
                            setNum(num - 6);
                        }}
                    />
                ) : null}
            </LeftRightButton>

            <Container>
                <Row>
                    {num <= challengeData.length - 1
                        ? renderChallenge(challengeData[num])
                        : null}
                    {num + 1 <= challengeData.length - 1
                        ? renderChallenge(challengeData[num + 1])
                        : null}
                    {num + 2 <= challengeData.length - 1
                        ? renderChallenge(challengeData[num + 2])
                        : null}
                </Row>
                <Row>
                    {num + 3 <= challengeData.length - 1
                        ? renderChallenge(challengeData[num + 3])
                        : null}
                    {num + 4 <= challengeData.length - 1
                        ? renderChallenge(challengeData[num + 4])
                        : null}
                    {num + 5 <= challengeData.length - 1
                        ? renderChallenge(challengeData[num + 5])
                        : null}
                </Row>
            </Container>
            <LeftRightButton>
                {num + 6 <= challengeData.length - 1 ? (
                    <img
                        src={rightIcon}
                        alt="right-icon"
                        style={{ height: "1.2vw", width: "1.2vw" }}
                        onClick={(e) => {
                            setNum(num + 6);
                        }}
                    />
                ) : null}
            </LeftRightButton>
        </ChallengesBox>
    );
};
const ChallengesBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 2.4vw;
    padding: 0px 1.3vw;
    width: 69vw;
    height: 25vw;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 11.3vw;
`;
const Challenge = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.72px 0.62px;
    margin: 0px 0.8vw;
    background-color: #d9d9d9;
    width: 20.57vw;
`;
const ChallengeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1vw;
    width: 100%;
    height: 9.8vw;
`;
const ChallengeName = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1.6vw;
    font-family: HUScribble150;
    line-height: auto;
    color: #000000;
`;
const ChallengeInfobox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
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

const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 0.78vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const InfoText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 1vw;
`;
const JoinButton = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.26vw 1vw;
    gap: 1vw;
    background-color: #ffffff;
`;
const JoinText = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const LeftRightButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2.3vw;
    height: 24vw;
`;

export default Challenges;
