import React, { useState, useEffect } from "react";

function CreateAccount() {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
        }
    };

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

    return (
        <>
            <h2>회원가입</h2>
            <div>아이디</div>
            <input type="text" />
            <div>비밀번호</div>
            <input type="password" />
            <div>비밀번호 확인</div>
            <input type="password" />
            <div>전화번호</div>
            <input type="text" onChange={handleChange} value={inputValue} />
        </>
    );
}

export default CreateAccount;
