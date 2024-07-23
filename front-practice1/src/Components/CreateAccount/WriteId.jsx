import React, { useState } from "react";

export default function WriteId({ domain, inputEmail, inputDomain }) {
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    function handleDomainChange(event) {
        const selectDomain = event.target.value;
        console.log(event.target.value);
        if (selectDomain !== "write") {
            inputDomain(selectDomain);
            setIsInputDisabled(true);
        } else {
            inputDomain("");
            setIsInputDisabled(false);
        }
    }

    //입력받은 값을 value로 넘김
    function handleInputChange(event) {
        console.log(event.target.value);
        inputDomain(event.target.value);
    }

    function handleEmailChage(event) {
        console.log(event.target.value);
        inputEmail(event.target.value);
    }

    return (
        <>
            <input
                id="email"
                type="text"
                required
                onChange={handleEmailChage}
                placeholder="이메일을 입력하세요"
            />
            @
            <input
                id="domainText"
                type="text"
                value={domain}
                required
                onChange={handleInputChange}
                disabled={isInputDisabled}
            />
            <select
                id="domainList"
                onChange={handleDomainChange}
            >
                <option value="write">직접 입력</option>
                <option value="gmail.com">구글</option>
                <option value="naver.com">네이버</option>
                <option value="kakao.com">카카오</option>
                <option value="nate.com">네이트</option>
                <option value="daum.net">다음</option>
                <option value="hanmail.net">한메일</option>
            </select>
        </>
    )
}