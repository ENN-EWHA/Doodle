import React from "react";
import "./App.css";
//import MainPage from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import MyPage from "./components/MyInfo";
import FindIdPw from "./components/forgotIdPw";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import SearchChallenges from "./pages/SearchChallenges";
import Challenge from "./pages/Challenge";
import axios from "axios";
//import { Nav } from "./components/Navbar/NavbarElements";

function App() {
    /*백엔드 연결*/

    useEffect(() => {
        axios
            .get("/users/root")
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    }, []);

    /*data*/
    const userData = {
        username: "Timothee Chalamet",
        color: ["#ffdce0", "#f5f0ff", "#dcffe4", "#fff5b1"],
        nickname: "peach",
        email: "Timo22@google.com",
        userid: "Timooo24",
        userpw: "ennlab22",
        checkPW: "ennlab22",
    };
    const challengeData = [
        {
            clgid: "1111",
            clgname: "운동1",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "운동",
            made_date: "2022-08-20",
            end_date: "2024-11-11",
        },
        {
            clgid: "2222",
            clgname: "운동2",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "운동",
            made_date: "2022-08-20",
            end_date: "2024-11-11",
        },
        {
            clgid: "3333",
            clgname: "운동3",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "운동",
            made_date: "2022-08-20",
            end_date: "2024-11-11",
        },
        {
            clgid: "1",
            clgname: "공부1",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "공부",
            made_date: "2022-04-20",
            end_date: "2024-02-11",
        },
        {
            clgid: "2",
            clgname: "공부2",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "공부",
            made_date: "2022-04-20",
            end_date: "2024-02-11",
        },
        {
            clgid: "3",
            clgname: "공부3",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "공부",
            made_date: "2022-04-20",
            end_date: "2024-02-11",
        },
        {
            clgid: "4",
            clgname: "공부4",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "공부",
            made_date: "2022-04-20",
            end_date: "2024-02-11",
        },
        {
            clgid: "5",
            clgname: "공부5",
            clgmanagerid: "ccc1",
            clginfo: "강의 2개씩 듣고 인증",
            clgmemberno: 10,
            clgCateId: "공부",
            made_date: "2022-04-20",
            end_date: "2024-02-11",
        },
    ];
    const userChallengeData = [
        {
            clgRelNo: 1,
            clgDetail: {
                clgName: "30분 독서",
                clgColor: "#ffdce0",
                clgComplete: true,
            },
        },
        {
            clgRelNo: 2,
            clgDetail: {
                clgName: "일기쓰기",
                clgColor: "#dcffe4",
                clgComplete: false,
            },
        },
        {
            clgRelNo: 3,
            clgDetail: {
                clgName: "운동하기",
                clgColor: "#f5f0ff",
                clgComplete: true,
            },
        },
        {
            clgRelNo: 4,
            clgDetail: {
                clgName: "30분 스트레칭",
                clgColor: "#fff5b1",
                clgComplete: true,
            },
        },
    ];
    const [data, setData] = useState(userChallengeData);
    const onEditColor = (targetId, newColor) => {
        setData(
            data.map((it) =>
                it.clgRelNo === targetId
                    ? {
                          ...it,
                          clgDetail: { ...it.clgDetail, clgColor: newColor },
                      }
                    : it
            )
        );
    };
    const onEditComplete = (targetId) => {
        setData(
            data.map((it) =>
                it.clgRelNo === targetId
                    ? {
                          ...it,
                          clgDetail: {
                              ...it.clgDetail,
                              clgComplete: it.clgDetail.clgComplete
                                  ? false
                                  : true,
                          },
                      }
                    : it
            )
        );
    };
    const onDelete = (targetId) => {
        setData(data.filter((it) => it.clgRelNo !== targetId));
        console.log(data);
    };
    const [clgs, setClgs] = useState(challengeData);
    const showCategoryClgs = (categoryName) => {
        setClgs(challengeData.filter((it) => it.clgCateId === categoryName));
    };
    const showFilteredClgs = (filtered) => {
        const result = [];
        filtered.map((f) =>
            result.push(challengeData.filter((it) => it.clgid === f.clgid))
        );
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i][0];
        }
        setClgs(result);
    };
    const [clg, setClg] = useState();
    const setClickedClg = (it) => {
        setClg(it);
    };
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/signin" element={<SigninPage />} exact />
                <Route path="/signup" element={<SignUpPage />} exact />
                <Route path="/MyInfo" element={<MyPage />} exact />
                <Route path="/forgotIdPw" element={<FindIdPw />} exact />

                <Route
                    path="/main"
                    element={
                        <Main
                            onEditComplete={onEditComplete}
                            challengeData={challengeData}
                            userChallengeData={data}
                            onEditColor={onEditColor}
                            onDelete={onDelete}
                            userData={userData}
                            showCategoryClgs={showCategoryClgs}
                            showFilteredClgs={showFilteredClgs}
                        />
                    }
                ></Route>
                <Route
                    path="/searchChallenges"
                    element={
                        <SearchChallenges
                            challengeData={challengeData}
                            showCategoryClgs={showCategoryClgs}
                            showFilteredClgs={showFilteredClgs}
                            clgs={clgs}
                            setClickedClg={setClickedClg}
                        />
                    }
                ></Route>
                <Route
                    path="/challenge"
                    element={<Challenge clg={clg}></Challenge>}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
