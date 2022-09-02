import styled from "styled-components";

const ClgAddButton = () => {
    return (
        <ClgAddButtonBox>
            <Text>챌린지 만들기</Text>
        </ClgAddButtonBox>
    );
};

const ClgAddButtonBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.3vw 2.4vw;
    background-color: #f3f3f3;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;

export default ClgAddButton;
