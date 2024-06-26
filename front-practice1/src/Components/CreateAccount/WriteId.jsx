import React, { useState } from "react";

export default function WriteId() {
    const [domain, setDomain] = useState("");
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    function handleDomainChange(event) {
        const selectDomain = event.target.value;
        console.log(event.target.value);
        if (selectDomain !== "write") {
            setDomain(selectDomain);
            setIsInputDisabled(true);
        } else {
            setDomain("");
            setIsInputDisabled(false);
        }
    }

    //입력받은 값을 value로 넘김
    function handleInputChange(event) {
        console.log(event.target.value);
        setDomain(event.target.value);
    }

    return (
        <>
            <input
                type="email"
                required
                placeholder="이메일을 입력하세요"
            />
            @
            <input
                id="domainText"
                type="text"
                value={domain}
                onChange={handleInputChange}
                disabled={isInputDisabled}
            />
            <select
                id="domainList"
                onChange={handleDomainChange}
            >
                <option value="write">직접 입력</option>
                <option value="google.com">구글</option>
                <option value="naver.com">네이버</option>
                <option value="kakao.com">카카오</option>
                <option value="nate.com">네이트</option>
                <option value="daum.net">다음</option>
                <option value="hanmail.net">한메일</option>
            </select>
        </>
    )
}