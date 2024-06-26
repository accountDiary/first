import React, { useState, useEffect } from "react";
import WriteId from "./WriteId";

function CreateAccount() {

    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [address, setAddress] = useState("");
    const [tel, setTel] = useState("");


    useEffect(() => {
        if (inputValue.length === 10) {
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
        }
        if (inputValue.length === 13) {
            setInputValue(
                inputValue.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
            );
        }
    }, [inputValue]);

    const handleChange = (event) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(event.target.value)) {
            setInputValue(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        
    }



    return (
        <>
            <h2>회원가입</h2>
            <div>아이디</div>
            <WriteId />
            <div>비밀번호</div>
            <input
                type="password"
                required
                placeholder="비밀번호를 입력하세요"
            />

            <div>비밀번호 확인</div>
            <input
                type="password"
                required
                placeholder="비밀번호를 확인하세요"
            />
            <div>이름</div>
            <input
                type="text"
                required
                placeholder="이름을 입력하세요"
            />
            <div>닉네임</div>
            <input
                type="text"
                required
                placeholder="닉네임을 입력하세요"
            />
            <div>전화번호</div>
            <input
                type="text"
                required
                placeholder="전화번호를 입력하세요"
                onChange={handleChange}
                value={inputValue}
            />
            <div>주소</div>
            <input
                type="text"
                required
                disabled
            />
            <button>우편번호 검색</button>
            <input
                type="text"
                required
                disabled
            />
            <input
                type="text"
                required
                placeholder="상세주소를 입력하세요"
            />

            <div>
                <button>회원가입 하기</button>
            </div>
        </>
    );
}

export default CreateAccount;
