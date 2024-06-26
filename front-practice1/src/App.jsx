import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FullCalendar1 from "./Components/Container/Calendar.jsx";
import TabButton from "./Components/Header/TabButton.jsx";
import LoginModal from "./Components/Header/Modal/LoginModal.jsx";
import { tab } from "./data.js";

function App() {
    const [ selectedContent, setSelectedContent ] = useState(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userList, setUserList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 

  
    //탭 선택 함수
    function handleSelect(selectedButton) {
        // selectedbutton이 diary랑 accountbook인거 알 수 있도록 구분하기 위함
        //setSelectedContent을 부를 때 즉 상태를 업데이트 시키는 함수를 부를때 리액트는 이 컴포넌트 함수를 재실행함 그리고 업데이트된 값을 사용할 수 있음
        //setSelectedContent(selectedButton);
        //console.log(selectedButton)
        if (isLoggedIn) {
          setSelectedContent(selectedButton);
      } else {
          alert("로그인 후 이용 가능합니다.");
      }
  };

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = () => {
      setIsLoggedIn(true); 
      setIsModalOpen(false);
  };
  

  // 사용자 데이터를 불러오는 비동기 함수
  const userData = async () => {
    await axios
        .get("/api/user/test/list")
        .then((response) => {
            setUserList(response.data.userList); // 사용자 목록을 상태에 저장
            console.log("1. ", response.data.userList);
            console.log("2. ", response.data);
        })
        .catch((error) => {
            console.error("error", error); // 오류 발생 시 콘솔에 출력
        });
};


 // 로그인 상태가 변경될 때마다 호출되는 useEffect 
 useEffect(() => {
  if (isLoggedIn) {
      userData(); // 로그인 상태일 때만 사용자 데이터를 불러옴
  }
}, [isLoggedIn]);


const openModal = () => {
  setIsModalOpen(true); 
};


const closeModal = () => {
  setIsModalOpen(false); 
};

useEffect(() => {
  console.log("모달 상태 변경 확인 :" , isModalOpen);
}, [isModalOpen]);

  return (
    <div className="App">
        <header>
          <div className="header-content">
          <section id="tab">
            <menu>
              <TabButton 
              isSelected={selectedContent === 'diary'}
              onSelect={() => handleSelect('diary')}>DIARY</TabButton>  
              {/* 일단 화살표 함수만 정의되기 때문에 화살표 함수 안에 코드는 아직실행 안됨
              
              버튼이 클릭되고 나서 함수가 실행되면 그 이후 화살표 함수 안에 코드가 실행되는거임 
              */}
              <TabButton 
              isSelected={selectedContent === 'acount'}
              onSelect={() => handleSelect('account')}>ACCOUNTBOOK</TabButton>
            </menu>  
          </section>
          <div id="login">
          <button onClick={openModal}>로그인</button>
          </div>
          </div>
        </header>

      <main>
      {selectedContent && (
                <div id="tab-content">
                    <h3>{tab[selectedContent].title}</h3>
                    <p>{tab[selectedContent].description}</p>
                </div>
            )}

      <div className="Calendar">
        <FullCalendar1 />
      </div>
      </main>

      <footer>
        <p>footer</p>
      </footer>
      
      {/* 모달부분 */}
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </div>
  );
}

export default App;
