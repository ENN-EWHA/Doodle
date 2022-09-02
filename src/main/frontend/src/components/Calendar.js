import styled from "styled-components";
import React, { useState } from "react";
import leftIcon from "../assets/images/left.png";
import rightIcon from "../assets/images/right.png";

const Calendar = ({ challengeData }) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const previousMonth = () => {
        if (month === 1) {
            setYear(year - 1);
            setMonth(12);
        } else setMonth(month - 1);
    };
    const nextMonth = () => {
        if (month === 12) {
            setYear(year + 1);
            setMonth(1);
        } else setMonth(month + 1);
    };
    const generateCalendar = (year, month) => {
        const startDay = new Date(year, month - 1, 1).getDay();
        const endDate = new Date(year, month, 0).getDate();
        const weekNumber = Math.ceil((startDay + endDate) / 7);
        const calendar = [];

        let nowDate = 0;
        let nowDay = 0;

        for (let j = 0; j < weekNumber; j++) {
            const nowWeek = [];
            for (let i = 0; i < 7; i++) {
                if (startDay <= nowDay && nowDate < endDate) {
                    nowDate++;
                    nowWeek.push(nowDate);
                } else {
                    nowWeek.push(0);
                }
                nowDay++;
            }
            calendar.push(nowWeek);
        }
        return renderCalendar({ calendar });
    };
    const renderCalendar = ({ calendar }) => {
        const result = [];

        for (let j = 0; j < calendar.length; j++) {
            const row = [];
            for (let i = 0; i < 7; i++) {
                if (calendar[j][i]) {
                    row.push(
                        <DayBox>
                            <DayBoxContent>
                                <Text>{calendar[j][i]}</Text>
                                <ColorBox>
                                    {makeColorBox({ challengeData })}
                                </ColorBox>
                            </DayBoxContent>
                        </DayBox>
                    );
                } else {
                    row.push(
                        <DayBox>
                            <Text>{null}</Text>
                        </DayBox>
                    );
                }
            }
            result.push(<Daylist>{row}</Daylist>);
        }
        return result;
    };

    const makeColorBox = () => {
        const result = [];

        let challengeDataArr = Object.values(challengeData);
        challengeDataArr = challengeDataArr.filter(
            (it) => it.clgDetail.clgComplete
        );

        challengeDataArr.map((it) =>
            result.push(
                <CB
                    style={{
                        height: 1.9 / challengeDataArr.length + "vw",
                        backgroundColor: it.clgDetail.clgColor,
                    }}
                    key={it[0]}
                ></CB>
            )
        );
        return result;
    };

    return (
        <CalendarBox>
            <Month>
                <img
                    src={leftIcon}
                    alt="left-icon"
                    style={{ height: "1.3vw", width: "1.3vw" }}
                    onClick={previousMonth}
                />
                <MonthText>
                    {year}.{month}
                </MonthText>
                <img
                    src={rightIcon}
                    alt="right-icon"
                    style={{ height: "1.3vw", width: "1.3vw" }}
                    onClick={nextMonth}
                />
            </Month>
            <Day>{generateCalendar(year, month)}</Day>
        </CalendarBox>
    );
};

const CalendarBox = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0.93vw 1.6vw;
    gap: 1.875vw;
    background-color: #ffffff;
    width: 53vw;
    height: 31vw;
`;
const Month = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3.43vw;
`;
const MonthText = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1.6vw;
    font-family: HUScribble150;
    line-height: auto;
    color: #000000;
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.36vw;
`;
const DayBox = styled.div`
    width: 6.4vw;
    height: 3.7vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0.36vw 0.46vw;
    gap: 0.5vw;
    background-color: #f3f2f2;
`;
const DayBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1.04vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;
const Daylist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.36vw;
`;
const ColorBox = styled.div`
    height: 1.9vw;
    width: 100%;
`;
const CB = styled.div`
    width: 100%;
`;

Calendar.defaultProps = {
    userData: [],
};

export default Calendar;
