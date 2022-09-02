import React,{useState} from 'react';
import styled from 'styled-components';


export function Tab(){
    const [currentTab,setCurrentTab] = useState(0)

    const menuArray=[
        {name:'모든 친구', content: '모든 친구목록 불러오기'},
        {name:'온라인인 친구', content:'온라인 상태인 친구 목록 불러오기'},
        {name:'친구 신청',content:'친구요청 수락/거부'},
        {name:'친구 관리',content: '친구관리'}
    ];
    const MenuHandler = (index)=>{
        setCurrentTab(index)
    };
    return(
        <>
        <div>
        <TabMenu>
        {menuArray.map((element,index)=>{
            return(
                <li key={index}
                className = {currentTab===index ? 'submenu focused':'submenu'}
                onClick = {()=>MenuHandler(index)}>
                {element.name}
                </li>
            );
        })}
        </TabMenu>
        <Desc>
            <p>{menuArray[currentTab].content}</p>
        </Desc>
        </div>
        </>
    );
};

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;
  }

  .focused {
    background-color: skyblue;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

// Styled-Component로 Desc 컴포넌트의 CSS 구현
const Desc = styled.div`
  text-align: center;
`;