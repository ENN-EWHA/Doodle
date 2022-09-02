import styled from "styled-components";
import chattIcon from "../assets/images/chatting.png";
import closeIcon from "../assets/images/close.png";
import { useState } from "react";

const Challenger = ({ clg }) => {
    const [chatt, setChatt] = useState(false);
    const showChallengers = () => {
        const result = [];
        result.push(<Title>참여자 목록</Title>);
        result.push(
            <ChallengerBoxContent>
                <ChallengerList>
                    <ChallengerInfo>
                        <Text>참가자이름</Text>
                        <IsOnline />
                    </ChallengerInfo>
                    <FreindRequestButton>
                        <Text>친구 신청</Text>
                    </FreindRequestButton>
                </ChallengerList>
            </ChallengerBoxContent>
        );
        result.push(
            <ChattButton>
                <img
                    src={chattIcon}
                    alt="chatt-icon"
                    style={{ width: "2.6vw", height: "2.6vw" }}
                    onClick={(e) => {
                        setChatt(true);
                    }}
                />
            </ChattButton>
        );
        return result;
    };
    const showChatting = () => {
        const result = [];
        result.push(
            <CloseButton>
                <img
                    src={closeIcon}
                    alt="close-icon"
                    style={{ width: "1.3vw", height: "1.3vw" }}
                    onClick={(e) => {
                        setChatt(false);
                    }}
                />
            </CloseButton>
        );
        result.push(<ChattBox />);
        result.push(
            <WrittingBox>
                <input
                    type="text"
                    style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontFamily: "HUScribble130",
                        width: "14.5vw",
                        height: "1.2vw",
                    }}
                ></input>
                <SendButton>
                    <Text>전송</Text>
                </SendButton>
            </WrittingBox>
        );
        result.push(<ChattButton></ChattButton>);
        return result;
    };
    return (
        <ChallengerBox>
            <Container>{chatt ? showChatting() : showChallengers()}</Container>
        </ChallengerBox>
    );
};

const ChallengerBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1.45vw 2.55vw;
    background-color: #ffffff;
    height: 33.6vw;
    width: 21.56vw;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 33.6vw;
    width: 100%;
`;
const Title = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1.6vw;
    font-family: HUScribble150;
    line-height: auto;
    color: #000000;
    margin-bottom: 3.4vw;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const ChallengerBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5vw;
    width: 100%;
    height: 18.4vw;
    margin-bottom: 3.4vw;
`;

const ChallengerList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const ChallengerInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;
`;

const IsOnline = styled.div`
    height: 0.5vw;
    width: 0.5vw;
    background: #dfdfdf;
    border-radius: 50%;
`;
const FreindRequestButton = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.026vw 0.5vw;
    background-color: #d9d9d9;
`;
const ChattButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5vw;
    width: 100%;
`;
const CloseButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5vw;
    width: 100%;
`;
/*chatting */
const ChattBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 27.1vw;
`;
const WrittingBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;
const SendButton = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1.2vw;
    width: 1.92vw;
`;
export default Challenger;
