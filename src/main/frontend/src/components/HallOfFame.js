import styled from "styled-components";

const HallOfFame = () => {
    return (
        <HallOfFameBox>
            <Container>
                <FirstBox>
                    <Text>3위</Text>
                </FirstBox>
                <ThirdBox>
                    <Text>1위</Text>
                </ThirdBox>
                <SecondBox>
                    <Text>2위</Text>
                </SecondBox>
            </Container>
        </HallOfFameBox>
    );
};

const HallOfFameBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.6vw 6.25vw;
    background-color: #ffffff;
    width: 50.1vw;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 1.6vw;
    width: 100%;
    height: 17.81vw;
`;
const FirstBox = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    width: 8.85vw;
    height: 5.78vw;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const ThirdBox = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    width: 8.85vw;
    height: 15.26vw;
`;

const SecondBox = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    width: 8.85vw;
    height: 10vw;
`;

export default HallOfFame;
