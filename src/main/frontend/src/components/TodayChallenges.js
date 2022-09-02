import styled from "styled-components";
import closeIcon from "../assets/images/close.png";
import settingIcon from "../assets/images/setting.png";
import colorIcon from "../assets/images/color.png";
import deleteIcon from "../assets/images/delete.png";
import { useState, useRef } from "react";

const TodayChallenges = ({
    challengeData,
    onEditColor,
    onEditComplete,
    userData,
    onDelete,
}) => {
    const [setting, setSetting] = useState(false);
    const popupObj = {};
    challengeData.map((it) => (popupObj[it.clgRelNo] = false));

    const [popup, setPopup] = useState(popupObj);
    const changeColor = (it, color) => {
        onEditColor(it.clgRelNo, color);
    };
    const makeColorBox = (it) => {
        const result = [];
        userData.color.map((color) =>
            result.push(
                <ColorBox
                    name={color}
                    style={{ backgroundColor: color }}
                    onClick={(e) => {
                        changeColor(it, e.target.getAttribute("name"));
                    }}
                ></ColorBox>
            )
        );
        return result;
    };
    const changeColorPopup = (it) => {
        const result = [];
        result.push(
            <ColorPopup>
                <Colors>{makeColorBox(it)}</Colors>
            </ColorPopup>
        );
        return result;
    };

    const clickSettingButton = () => {
        const result = [];
        const challengelist = [];
        {
            challengeData.map((it) =>
                challengelist.push(
                    <TCListBox>
                        <TC>
                            <TCName key={it.clgRelNo}>
                                {it.clgDetail.clgName}
                            </TCName>
                            <Buttons>
                                <img
                                    src={colorIcon}
                                    alt="color=icon"
                                    style={{ width: "1vw", height: "1vw" }}
                                    onClick={(e) => {
                                        setPopup({
                                            ...popup,
                                            [it.clgRelNo]: popup[it.clgRelNo]
                                                ? false
                                                : true,
                                        });
                                    }}
                                />
                                <img
                                    src={deleteIcon}
                                    alt="delete=icon"
                                    style={{ width: "1vw", height: "1vw" }}
                                    onClick={(e) => onDelete(it.clgRelNo)}
                                />
                            </Buttons>
                        </TC>
                        {popup[it.clgRelNo] ? changeColorPopup(it) : null}
                    </TCListBox>
                )
            );
        }

        result.push(
            <TCContent>
                <CloseButton>
                    <img
                        src={closeIcon}
                        alt="close-icon"
                        style={{ width: "1.3vw", height: "1.3vw" }}
                        onClick={(e) => {
                            setSetting(false);
                        }}
                    />
                </CloseButton>
                <TCList>{challengelist}</TCList>
            </TCContent>
        );
        return result;
    };
    const showChallengeList = () => {
        const result = [];
        const challengelist = [];

        {
            challengeData.map((it) =>
                challengelist.push(
                    <TC>
                        <TCName key={it.clgRelNo}>
                            {it.clgDetail.clgName}
                        </TCName>
                        <Checkbox
                            type="checkbox"
                            style={{
                                backgroundColor: it.clgDetail.clgComplete
                                    ? it.clgDetail.clgColor
                                    : "transparent",
                            }}
                            onClick={(e) => {
                                onEditComplete(it.clgRelNo);
                            }}
                        ></Checkbox>
                    </TC>
                )
            );
        }
        result.push(
            <Container>
                <TCContent>
                    <Title>오늘의 챌린지</Title>
                    <TCList>{challengelist}</TCList>
                </TCContent>
                <SettingButton>
                    <img
                        src={settingIcon}
                        alt="setting-icon"
                        style={{ width: "1.3vw", height: "1.3vw" }}
                        onClick={(e) => {
                            setSetting(true);
                        }}
                    />
                </SettingButton>
            </Container>
        );
        return result;
    };
    return (
        <TCBox>{setting ? clickSettingButton() : showChallengeList()}</TCBox>
    );
};

const TCBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1.35vw 1.4vw;
    background-color: #ffffff;
    width: 16.3vw;
    height: 31vw;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2.1vw;
    width: 100%;
    height: 28.3vw;
`;
const TCContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3.1vw;
    width: 100%;
    height: 23.9vw;
`;
const Title = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 1.6vw;
    font-family: HUScribble150;
    line-height: auto;
    color: #000000;
`;
const TCList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;
    width: 100%;
    height: 19vw;
`;
const TC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Checkbox = styled.div`
    border: 2px solid black;
    height: 1vw;
    width: 1vw;
`;

const TCName = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const SettingButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5vw 0px;
    width: 100%;
`;

/* setting popup window*/

const TCListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.78vw;
`;
const CloseButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5vw;
`;
TodayChallenges.defaultProps = {
    userData: [],
};
const ColorPopup = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.78vw 0.625vw;
    gap: 0.5vw;
    background-color: #d9d9d9;
`;
const Colors = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.93vw;
`;
const ColorBox = styled.div`
    height: 0.78vw;
    width: 0.78vw;
`;

export default TodayChallenges;
